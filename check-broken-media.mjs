import { db } from './server/db.js';
import { media } from './shared/schema.ts';
import { isNull } from 'drizzle-orm';
import fs from 'fs/promises';
import path from 'path';

async function checkBrokenMedia() {
  // Get all non-trashed media
  const allMedia = await db.select().from(media).where(isNull(media.trashedAt));
  
  console.log(`\n📊 Checking ${allMedia.length} media files...\n`);
  
  const brokenFiles = [];
  const workingFiles = [];
  
  for (const file of allMedia) {
    let filePath;
    
    // Extract file path from URL
    if (file.url.startsWith('/api/uploads/')) {
      filePath = path.join('public/uploads', file.url.replace('/api/uploads/', ''));
    } else if (file.url.startsWith('/attached_assets/')) {
      filePath = path.join('attached_assets', file.url.replace('/attached_assets/', ''));
    } else {
      // External URL or other path
      workingFiles.push(file);
      continue;
    }
    
    try {
      await fs.access(filePath);
      workingFiles.push(file);
    } catch (err) {
      brokenFiles.push({ ...file, expectedPath: filePath });
    }
  }
  
  console.log(`✅ Working files: ${workingFiles.length}`);
  console.log(`❌ Broken files: ${brokenFiles.length}\n`);
  
  if (brokenFiles.length > 0) {
    console.log('Broken files list:');
    console.log('ID\tFilename\tExpected Path');
    console.log('--\t--------\t-------------');
    brokenFiles.forEach(file => {
      console.log(`${file.id}\t${file.filename}\t${file.expectedPath}`);
    });
    
    // Save broken file IDs to a file for easy deletion
    await fs.writeFile(
      'broken-media-ids.json',
      JSON.stringify(brokenFiles.map(f => f.id), null, 2)
    );
    console.log('\n📝 Broken media IDs saved to: broken-media-ids.json');
  }
}

checkBrokenMedia().catch(console.error).finally(() => process.exit(0));
