#!/usr/bin/env tsx
/**
 * Import existing uploaded files into the media table
 * This script scans the uploads/ directory and creates media entries
 * for all files that aren't already tracked in the database
 */

import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { media } from '../shared/schema';
import { eq, sql } from 'drizzle-orm';

async function importExistingMedia() {
  const uploadsDir = path.join(process.cwd(), 'uploads');
  
  if (!fs.existsSync(uploadsDir)) {
    console.log('No uploads directory found');
    return;
  }

  console.log('Scanning uploads directory...');
  const files = fs.readdirSync(uploadsDir);
  
  // Filter for image files only
  const imageFiles = files.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.webp', '.jpg', '.jpeg', '.png', '.gif', '.svg'].includes(ext);
  });

  console.log(`Found ${imageFiles.length} image files`);

  // Get all existing media entries
  const existingMedia = await db.select().from(media);
  const existingFilenames = new Set(existingMedia.map(m => m.filename));

  let imported = 0;
  let skipped = 0;

  for (const filename of imageFiles) {
    // Skip if already in database
    if (existingFilenames.has(filename)) {
      skipped++;
      continue;
    }

    try {
      const filePath = path.join(uploadsDir, filename);
      const stats = fs.statSync(filePath);
      
      // Determine MIME type from extension
      const ext = path.extname(filename).toLowerCase();
      let mimeType = 'image/jpeg';
      if (ext === '.webp') mimeType = 'image/webp';
      else if (ext === '.png') mimeType = 'image/png';
      else if (ext === '.gif') mimeType = 'image/gif';
      else if (ext === '.svg') mimeType = 'image/svg+xml';

      // Extract original name (remove timestamp and hash if present)
      let originalName = filename
        .replace(/\.(webp|jpg|jpeg|png|gif|svg)$/i, '')
        .replace(/_\d{13,}_[a-f0-9]{16}/i, '') // Remove timestamp_hash pattern
        .replace(/_\d{13,}/i, '') // Remove standalone timestamp
        .replace(/-\d+w$/i, '') // Remove width suffix
        .replace(/[-_]/g, ' ') // Replace dashes and underscores with spaces
        .trim();

      // Capitalize first letter of each word
      originalName = originalName
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

      const url = `/api/uploads/${filename}`;

      // Insert into database
      await db.insert(media).values({
        filename: filename,
        originalName: originalName,
        url: url,
        mimeType: mimeType,
        size: stats.size,
        uploadedBy: 1, // System import
        createdAt: stats.birthtime || stats.mtime || new Date()
      });

      imported++;
      console.log(`✓ Imported: ${filename}`);
    } catch (error) {
      console.error(`✗ Failed to import ${filename}:`, error);
    }
  }

  console.log('\n=== Import Summary ===');
  console.log(`Total files found: ${imageFiles.length}`);
  console.log(`Already in database: ${skipped}`);
  console.log(`Newly imported: ${imported}`);
  console.log(`Total in database: ${existingMedia.length + imported}`);
}

// Run import
importExistingMedia()
  .then(() => {
    console.log('\n✅ Media import complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Import failed:', error);
    process.exit(1);
  });
