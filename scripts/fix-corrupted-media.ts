import fs from 'fs';
import { db } from '../server/db';
import { media } from '../shared/schema';
import { eq } from 'drizzle-orm';

interface MigrationMapping {
  originalFilename: string;
  objectPath: string;
  size: number;
  uploadedAt: string;
}

async function fixCorruptedMedia() {
  const mappingFile = 'migration-mapping.json';
  if (!fs.existsSync(mappingFile)) {
    console.error('migration-mapping.json not found');
    process.exit(1);
  }

  const mappings: MigrationMapping[] = JSON.parse(fs.readFileSync(mappingFile, 'utf-8'));
  
  const corruptedFiles = [
    'Education-Consultant-in-Lahore-Johar-Town.webp',
    'Register-Company-in-UK.webp',
    'Dubai-Visa-for-Pakistani.webp',
    'LanguageCert.webp',
    'Best-Study-Abroad-Consultants-in-Pakistan.webp',
    'Study-in-Finland.webp',
    'Career-Counselling-for-Students.webp',
    'Top-Study-Abroad-Countries.webp',
    'UK-Work-Visa-Consultants.webp',
    'Norway-Study-Visa.webp',
    'Sweden-Student-Visa-Requirements.webp',
    'Top-Immigration-Consultants.webp',
    'How-to-Apply-for-Student-Visa.webp',
    'Study-Abroad-Consultants-in-Lahore.webp',
    'Bank-Statement-for-UK-Visa.webp',
    'Canada-Student-Visa-Consultants.webp',
    'Best-Education-Consultants.webp',
    'Ireland-Student-Visa.webp',
    'Exchange-Programs-for-Pakistani-Students.webp',
    'Foreign-Education-Consultants.webp'
  ];

  let fixed = 0;
  
  for (const filename of corruptedFiles) {
    const mapping = mappings.find(m => m.originalFilename === filename);
    if (!mapping) {
      console.log(`⚠️  No mapping found for ${filename}`);
      continue;
    }

    const oldUrl = `/api/uploads/${filename}`;
    const newUrl = mapping.objectPath;
    
    await db
      .update(media)
      .set({ url: newUrl })
      .where(eq(media.url, oldUrl));
    
    console.log(`✅ Updated ${filename}: ${oldUrl} → ${newUrl}`);
    fixed++;
  }
  
  console.log(`\n✅ Fixed ${fixed} corrupted media URLs`);
  process.exit(0);
}

fixCorruptedMedia().catch(console.error);
