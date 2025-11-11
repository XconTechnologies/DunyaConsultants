#!/usr/bin/env tsx
/**
 * Migration script to move existing uploads from local filesystem to object storage
 * 
 * This script:
 * 1. Scans the local ./uploads directory
 * 2. Uploads each file to object storage with public ACL
 * 3. Generates a mapping file of old filename → new object path
 * 4. Creates SQL to update database references
 * 
 * Usage:
 *   npm run migrate-uploads
 * 
 * Referenced from architect plan for object storage migration
 */

import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';
import { objectStorageClient, ObjectStorageService } from '../server/objectStorage';
import { randomUUID } from 'crypto';

interface MigrationMapping {
  originalFilename: string;
  objectPath: string;
  size: number;
  uploadedAt: string;
}

async function migrateUploadsToObjectStorage() {
  const uploadsDir = path.join(process.cwd(), 'uploads');
  const mappingFile = path.join(process.cwd(), 'migration-mapping.json');
  const sqlFile = path.join(process.cwd(), 'migration-updates.sql');

  if (!fs.existsSync(uploadsDir)) {
    console.log('No uploads directory found - nothing to migrate');
    return;
  }

  console.log('Starting migration of local uploads to object storage...');
  console.log('Upload directory:', uploadsDir);

  const objectStorageService = new ObjectStorageService();
  const privateDir = objectStorageService.getPrivateObjectDir();
  const mappings: MigrationMapping[] = [];

  // Get all files in uploads directory (excluding temp)
  const files = await fsPromises.readdir(uploadsDir);
  const imageFiles = files.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.webp', '.jpg', '.jpeg', '.png', '.gif'].includes(ext) && !f.startsWith('temp_');
  });

  console.log(`Found ${imageFiles.length} files to migrate`);

  for (const filename of imageFiles) {
    try {
      const filePath = path.join(uploadsDir, filename);
      const stats = await fsPromises.stat(filePath);

      // Skip if it's a directory
      if (stats.isDirectory()) {
        continue;
      }

      // Generate object storage path
      const ext = path.extname(filename);
      const objectId = randomUUID();
      const objectName = `uploads/${objectId}${ext}`;
      const fullObjectPath = `${privateDir}/${objectName}`;

      // Parse bucket and object name
      const bucketName = fullObjectPath.split('/')[1];
      const objectKey = fullObjectPath.split('/').slice(2).join('/');

      // Read file
      const fileBuffer = await fsPromises.readFile(filePath);

      // Determine content type
      let contentType = 'application/octet-stream';
      if (ext === '.webp') contentType = 'image/webp';
      else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
      else if (ext === '.png') contentType = 'image/png';
      else if (ext === '.gif') contentType = 'image/gif';

      // Upload to object storage
      const bucket = objectStorageClient.bucket(bucketName);
      const file = bucket.file(objectKey);

      await file.save(fileBuffer, {
        contentType,
        metadata: {
          metadata: {
            'custom:aclPolicy': JSON.stringify({
              owner: 'system',
              visibility: 'public'
            }),
            originalName: filename,
            migratedFrom: 'local-uploads',
            migratedAt: new Date().toISOString()
          }
        }
      });

      const objectPath = `/objects/${objectName}`;
      
      mappings.push({
        originalFilename: filename,
        objectPath,
        size: stats.size,
        uploadedAt: new Date().toISOString()
      });

      console.log(`✓ Migrated: ${filename} → ${objectPath}`);

    } catch (error) {
      console.error(`✗ Failed to migrate ${filename}:`, error);
    }
  }

  // Save mappings to JSON
  await fsPromises.writeFile(
    mappingFile,
    JSON.stringify(mappings, null, 2)
  );
  console.log(`\nMigration mapping saved to: ${mappingFile}`);

  // Generate SQL update statements
  const sqlStatements: string[] = [
    '-- SQL statements to update database references from local paths to object storage',
    '-- Review these statements before running them!',
    '',
    'BEGIN;',
    ''
  ];

  for (const mapping of mappings) {
    // Update blog posts featured images
    sqlStatements.push(
      `UPDATE blog_posts SET featured_image = '${mapping.objectPath}' WHERE featured_image = '/api/uploads/${mapping.originalFilename}';`
    );
    
    // Update branch icons
    sqlStatements.push(
      `UPDATE branch_icons SET icon_url = '${mapping.objectPath}' WHERE icon_url = '/api/uploads/${mapping.originalFilename}';`
    );
    
    // Update university icons
    sqlStatements.push(
      `UPDATE university_icons SET logo_url = '${mapping.objectPath}' WHERE logo_url = '/api/uploads/${mapping.originalFilename}';`
    );
  }

  sqlStatements.push('', 'COMMIT;');

  await fsPromises.writeFile(sqlFile, sqlStatements.join('\n'));
  console.log(`SQL update statements saved to: ${sqlFile}`);

  console.log(`\n✅ Migration complete!`);
  console.log(`   Files migrated: ${mappings.length}`);
  console.log(`   Next steps:`);
  console.log(`   1. Review ${sqlFile}`);
  console.log(`   2. Run the SQL against your database`);
  console.log(`   3. Test that images load correctly`);
  console.log(`   4. Archive or delete the local uploads/ directory`);
}

// Run migration
migrateUploadsToObjectStorage()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Migration failed:', error);
    process.exit(1);
  });
