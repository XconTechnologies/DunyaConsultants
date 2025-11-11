#!/usr/bin/env tsx
/**
 * Import branch icons from object storage
 */

import { db } from '../server/db';
import { media } from '../shared/schema';
import { sql } from 'drizzle-orm';
import path from 'path';

async function importBranchIcons() {
  console.log('=== Importing Branch Icons from Object Storage ===\n');

  // Get all branch icons
  const branchIcons = await db.execute(sql`
    SELECT icon_url, name FROM branch_icons 
    WHERE icon_url IS NOT NULL 
    AND icon_url != ''
    AND icon_url LIKE '/objects/uploads/%'
  `);

  console.log(`Found ${branchIcons.rows.length} branch icons`);

  // Get existing media
  const existingMedia = await db.select().from(media);
  const existingUrls = new Set(existingMedia.map(m => m.url));

  let imported = 0;
  let skipped = 0;

  for (const row of branchIcons.rows) {
    const url = row.icon_url as string;
    const branchName = row.name as string;
    
    if (existingUrls.has(url)) {
      skipped++;
      continue;
    }

    try {
      const filename = path.basename(url);
      
      await db.insert(media).values({
        filename: filename,
        originalName: `${branchName} Branch Icon`,
        url: url,
        mimeType: 'image/png',
        size: 0,
        uploadedBy: 1,
        createdAt: new Date()
      });

      imported++;
      console.log(`✓ Imported: ${branchName}`);
    } catch (error) {
      console.error(`✗ Failed to import ${branchName}:`, error);
    }
  }

  console.log('\n=== Summary ===');
  console.log(`Total branch icons: ${branchIcons.rows.length}`);
  console.log(`Already in database: ${skipped}`);
  console.log(`Newly imported: ${imported}`);

  // Final count
  const finalCount = await db.select({ count: sql<number>`count(*)` }).from(media);
  console.log(`\nTotal media in database: ${finalCount[0].count}`);
}

importBranchIcons()
  .then(() => {
    console.log('\n✅ Branch icons import complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Import failed:', error);
    process.exit(1);
  });
