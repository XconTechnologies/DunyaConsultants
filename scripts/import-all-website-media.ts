#!/usr/bin/env tsx
/**
 * Comprehensive media import script
 * Imports ALL website images from:
 * 1. attached_assets/ directory (logos, blog images, icons, etc.)
 * 2. Object storage branch icons
 * 3. Object storage university icons (if not already tracked)
 */

import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { media } from '../shared/schema';
import { eq, sql } from 'drizzle-orm';

interface ImportStats {
  total: number;
  imported: number;
  skipped: number;
  failed: number;
}

async function importFromDirectory(dirPath: string, urlPrefix: string, stats: ImportStats) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`);
    return;
  }

  console.log(`\nScanning: ${dirPath}`);
  
  // Recursively find all image files
  const findImages = (dir: string, fileList: string[] = []): string[] => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findImages(filePath, fileList);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (['.webp', '.jpg', '.jpeg', '.png', '.gif', '.svg'].includes(ext)) {
          fileList.push(filePath);
        }
      }
    });
    
    return fileList;
  };

  const imageFiles = findImages(dirPath);
  console.log(`Found ${imageFiles.length} image files`);
  stats.total += imageFiles.length;

  // Get existing media entries
  const existingMedia = await db.select().from(media);
  const existingUrls = new Set(existingMedia.map(m => m.url));

  for (const filePath of imageFiles) {
    try {
      const relativePath = path.relative(process.cwd(), filePath);
      const filename = path.basename(filePath);
      
      // Generate URL based on location
      let url: string;
      if (relativePath.startsWith('attached_assets')) {
        url = '/' + relativePath.replace(/\\/g, '/');
      } else {
        url = `${urlPrefix}/${filename}`;
      }

      // Skip if already in database
      if (existingUrls.has(url)) {
        stats.skipped++;
        continue;
      }

      const fileStats = fs.statSync(filePath);
      
      // Determine MIME type
      const ext = path.extname(filename).toLowerCase();
      let mimeType = 'image/jpeg';
      if (ext === '.webp') mimeType = 'image/webp';
      else if (ext === '.png') mimeType = 'image/png';
      else if (ext === '.gif') mimeType = 'image/gif';
      else if (ext === '.svg') mimeType = 'image/svg+xml';

      // Extract readable name
      let originalName = filename
        .replace(/\.(webp|jpg|jpeg|png|gif|svg)$/i, '')
        .replace(/_\d{13,}_[a-f0-9]{16}/i, '')
        .replace(/_\d{13,}/i, '')
        .replace(/-\d+w$/i, '')
        .replace(/[-_]/g, ' ')
        .trim();

      // Capitalize
      originalName = originalName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

      // Insert into database
      await db.insert(media).values({
        filename: filename,
        originalName: originalName || filename,
        url: url,
        mimeType: mimeType,
        size: fileStats.size,
        uploadedBy: 1, // System import
        createdAt: fileStats.birthtime || fileStats.mtime || new Date()
      });

      stats.imported++;
      
      // Log progress every 100 files
      if (stats.imported % 100 === 0) {
        console.log(`Progress: ${stats.imported} imported...`);
      }
    } catch (error) {
      console.error(`Failed to import ${filePath}:`, error);
      stats.failed++;
    }
  }
}

async function importObjectStorageIcons() {
  console.log('\n=== Importing Object Storage Icons ===');
  
  const stats: ImportStats = {
    total: 0,
    imported: 0,
    skipped: 0,
    failed: 0
  };

  // Import branch icons
  const branchIcons = await db.execute(sql`
    SELECT icon_url FROM branch_icons 
    WHERE icon_url IS NOT NULL 
    AND icon_url != ''
    AND icon_url LIKE '/objects/uploads/%'
  `);

  console.log(`Found ${branchIcons.rows.length} branch icons`);
  stats.total += branchIcons.rows.length;

  const existingMedia = await db.select().from(media);
  const existingUrls = new Set(existingMedia.map(m => m.url));

  for (const row of branchIcons.rows) {
    const url = row.icon_url as string;
    
    if (existingUrls.has(url)) {
      stats.skipped++;
      continue;
    }

    try {
      const filename = path.basename(url);
      
      await db.insert(media).values({
        filename: filename,
        originalName: 'Branch Icon',
        url: url,
        mimeType: 'image/png',
        size: 0, // Unknown size for object storage
        uploadedBy: 1,
        createdAt: new Date()
      });

      stats.imported++;
    } catch (error) {
      console.error(`Failed to import branch icon ${url}:`, error);
      stats.failed++;
    }
  }

  return stats;
}

async function main() {
  console.log('=== Comprehensive Website Media Import ===\n');

  const totalStats: ImportStats = {
    total: 0,
    imported: 0,
    skipped: 0,
    failed: 0
  };

  // 1. Import from attached_assets
  console.log('\n--- Phase 1: Attached Assets ---');
  const attachedAssetsDir = path.join(process.cwd(), 'attached_assets');
  await importFromDirectory(attachedAssetsDir, '/attached_assets', totalStats);

  // 2. Import object storage icons
  console.log('\n--- Phase 2: Object Storage Icons ---');
  const iconStats = await importObjectStorageIcons();
  totalStats.total += iconStats.total;
  totalStats.imported += iconStats.imported;
  totalStats.skipped += iconStats.skipped;
  totalStats.failed += iconStats.failed;

  // Final summary
  console.log('\n' + '='.repeat(50));
  console.log('FINAL IMPORT SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total images found:     ${totalStats.total}`);
  console.log(`Already in database:    ${totalStats.skipped}`);
  console.log(`Newly imported:         ${totalStats.imported}`);
  console.log(`Failed:                 ${totalStats.failed}`);
  console.log('='.repeat(50));

  // Get final count
  const finalCount = await db.select({ count: sql<number>`count(*)` }).from(media);
  console.log(`\nTotal media in database: ${finalCount[0].count}`);
}

main()
  .then(() => {
    console.log('\n✅ Complete media import finished!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Import failed:', error);
    process.exit(1);
  });
