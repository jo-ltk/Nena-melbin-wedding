import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname } from 'path';

const PUBLIC_DIR = './public';
const GALLERY_DIR = './public/gallery';
const MAX_WIDTH = 1920;
const GALLERY_MAX_WIDTH = 1400;
const QUALITY = 82;

async function optimizeImage(filePath, maxWidth) {
  const ext = extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const info = await stat(filePath);
  const sizeMB = (info.size / 1024 / 1024).toFixed(2);
  
  if (info.size < 500 * 1024) {
    console.log(`  SKIP ${filePath} (${sizeMB}MB - already small)`);
    return;
  }

  const tmpPath = filePath + '.tmp.jpg';

  try {
    // Read file into buffer first to release the file handle
    const inputBuffer = await sharp(filePath).toBuffer();
    const metadata = await sharp(inputBuffer).metadata();
    
    let pipeline = sharp(inputBuffer)
      .rotate()
      .jpeg({ quality: QUALITY, mozjpeg: true });
    
    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
    }

    // Write to temp file, then replace original
    await pipeline.toFile(tmpPath);
    const tmpInfo = await stat(tmpPath);
    const newSizeMB = (tmpInfo.size / 1024 / 1024).toFixed(2);
    const savings = (((info.size - tmpInfo.size) / info.size) * 100).toFixed(1);
    
    if (tmpInfo.size < info.size) {
      await unlink(filePath);
      await rename(tmpPath, filePath);
      console.log(`  ✓ ${filePath}: ${sizeMB}MB → ${newSizeMB}MB (${savings}% smaller)`);
    } else {
      await unlink(tmpPath);
      console.log(`  SKIP ${filePath} (already optimal)`);
    }
  } catch (err) {
    try { await unlink(tmpPath); } catch {}
    console.error(`  ✗ ${filePath}: ${err.message}`);
  }
}

async function processDirectory(dir, maxWidth) {
  const files = await readdir(dir);
  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);
    if (fileStat.isFile()) {
      await optimizeImage(filePath, maxWidth);
    }
  }
}

console.log('\n🖼️  Optimizing wedding images...\n');
console.log('── Public root images ──');
await processDirectory(PUBLIC_DIR, MAX_WIDTH);
console.log('\n── Gallery images ──');
await processDirectory(GALLERY_DIR, GALLERY_MAX_WIDTH);
console.log('\n✅ Done!\n');
