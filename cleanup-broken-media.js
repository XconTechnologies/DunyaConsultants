const fs = require('fs');
const path = require('path');

// Simulate the media entries from database
const mediaUrls = [
  '/api/uploads/a-complete-guide-to-turkiye-burslari-scholarship_1758609128866_388bb28f38fb5a70.webp',
  '/api/uploads/australia-student-visa-requirements-for-pakistanis_1758103834873_93c85ddc6d35306a.webp',
  '/api/uploads/best-study-abroad-countries-for-international-stud_1758883380111_8e5e726d234e753c.webp',
  '/api/uploads/bahawalpur-open-day-banner.webp',
  '/attached_assets/IMG-20250425-WA0016_1750755121093.webp'
];

const brokenIds = [];
const workingIds = [];

mediaUrls.forEach((url, index) => {
  let filePath;
  const id = index + 1;
  
  // Check if external URL
  if (url.startsWith('http://') || url.startsWith('https://')) {
    workingIds.push(id);
    return;
  }
  
  if (url.startsWith('/api/uploads/')) {
    filePath = path.join('public/uploads', url.replace('/api/uploads/', ''));
  } else if (url.startsWith('/attached_assets/')) {
    filePath = path.join('attached_assets', url.replace('/attached_assets/', ''));
  } else {
    workingIds.push(id);
    return;
  }
  
  if (fs.existsSync(filePath)) {
    workingIds.push(id);
    console.log(`✅ ${id}: ${url}`);
  } else {
    brokenIds.push(id);
    console.log(`❌ ${id}: ${url}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`Working files: ${workingIds.length}`);
console.log(`Broken files: ${brokenIds.length}`);
