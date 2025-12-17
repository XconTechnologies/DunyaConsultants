import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const distIndex = path.join(distDir, 'index.js');

// Check if dist/index.js exists, if not build it
if (!fs.existsSync(distIndex)) {
  console.log('📦 dist/index.js not found, building project...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Import and run the built app
console.log('🚀 Starting application...');
const { default: app } = await import(distIndex);
