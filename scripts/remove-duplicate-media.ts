import { db } from '../server/db';
import { media } from '../shared/schema';
import { sql, inArray, and, isNull, eq } from 'drizzle-orm';

async function removeDuplicateMedia() {
  console.log('🔍 Finding duplicate images...\n');
  
  // Find duplicates based on original_name
  const duplicates = await db.execute(sql`
    SELECT original_name, COUNT(*) as count
    FROM media
    WHERE trashed_at IS NULL
    GROUP BY original_name
    HAVING COUNT(*) > 1
    ORDER BY count DESC
  `);
  
  console.log(`Found ${duplicates.rows.length} groups of duplicates\n`);
  
  let totalRemoved = 0;
  
  for (const dup of duplicates.rows) {
    const originalName = dup.original_name as string;
    const count = dup.count as number;
    
    // Get all media with this original_name, ordered by ID (newest last)
    const result = await db.execute(sql`
      SELECT * FROM media
      WHERE original_name = ${originalName}
      AND trashed_at IS NULL
      ORDER BY id ASC
    `);
    const mediaItems = result.rows as any[];
    
    if (mediaItems.length <= 1) continue;
    
    // Keep the newest (last one), remove the rest
    const toKeep = mediaItems[mediaItems.length - 1];
    const toRemove = mediaItems.slice(0, -1);
    
    console.log(`📦 "${originalName}" (${count} copies)`);
    console.log(`   ✅ Keeping: ${toKeep.url} (ID: ${toKeep.id})`);
    
    // Trash the duplicates
    const idsToRemove = toRemove.map(m => m.id);
    
    if (idsToRemove.length > 0) {
      const idsArray = `{${idsToRemove.join(',')}}`;
      await db.execute(sql.raw(`
        UPDATE media
        SET trashed_at = NOW()
        WHERE id = ANY(ARRAY[${idsToRemove.join(',')}])
      `));
    }
    
    console.log(`   🗑️  Removed ${idsToRemove.length} duplicates\n`);
    totalRemoved += idsToRemove.length;
  }
  
  console.log(`\n✅ Total duplicates removed: ${totalRemoved}`);
  console.log(`📊 Remaining active images: ${(await db.query.media.findMany({ where: isNull(media.trashed_at) })).length}`);
  
  process.exit(0);
}

removeDuplicateMedia().catch(console.error);
