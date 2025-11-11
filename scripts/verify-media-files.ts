#!/usr/bin/env tsx
/**
 * Verify that all media entries in the database point to existing files
 * and remove broken entries
 */

import fs from 'fs';
import path from 'path';
import { db } from '../server/db';
import { media } from '../shared/schema';
import { eq, sql } from 'drizzle-orm';

async function verifyMediaFiles() {
  console.log('=== Verifying Media Files ===\n');

  // Get all media entries
  const allMedia = await db.select().from(media).where(sql`trashed_at IS NULL`);
  console.log(`Total media entries to verify: ${allMedia.length}\n`);

  let validCount = 0;
  let brokenCount = 0;
  const brokenMedia: typeof allMedia = [];

  for (const mediaItem of allMedia) {
    const url = mediaItem.url;
    let exists = false;

    if (url.startsWith('/api/uploads/')) {
      // Check uploads folder
      const filename = url.replace('/api/uploads/', '');
      const filePath = path.join(process.cwd(), 'uploads', filename);
      exists = fs.existsSync(filePath);
    } else if (url.startsWith('/attached_assets/')) {
      // Check attached_assets folder
      const relativePath = url.replace(/^\//, '');
      const filePath = path.join(process.cwd(), relativePath);
      exists = fs.existsSync(filePath);
    } else if (url.startsWith('/objects/uploads/')) {
      // Object storage - assume valid (can't verify cloud files easily)
      exists = true;
    } else {
      // Unknown URL format
      console.log(`Unknown URL format: ${url}`);
    }

    if (exists) {
      validCount++;
    } else {
      brokenCount++;
      brokenMedia.push(mediaItem);
      console.log(`❌ Broken: ${mediaItem.originalName} (${url})`);
    }
  }

  console.log('\n=== Verification Summary ===');
  console.log(`Valid files: ${validCount}`);
  console.log(`Broken files: ${brokenCount}`);

  if (brokenMedia.length > 0) {
    console.log('\n=== Removing Broken Entries ===');
    for (const item of brokenMedia) {
      try {
        await db.delete(media).where(eq(media.id, item.id));
        console.log(`✓ Removed: ${item.originalName}`);
      } catch (error) {
        console.error(`✗ Failed to remove ${item.originalName}:`, error);
      }
    }
  }

  // Final count
  const finalCount = await db.select({ count: sql<number>`count(*)` }).from(media).where(sql`trashed_at IS NULL`);
  console.log(`\nFinal media count: ${finalCount[0].count}`);
}

verifyMediaFiles()
  .then(() => {
    console.log('\n✅ Verification complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Verification failed:', error);
    process.exit(1);
  });
