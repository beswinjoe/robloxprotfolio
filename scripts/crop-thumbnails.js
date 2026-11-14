const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../public/games');
const outDir = path.join(__dirname, '../public/games/thumbs');
const userUploadsDir = '/Users/beswinjoe/.gemini/antigravity/brain/d1fcfeab-d9f3-4b6e-9cfe-8f356f438622/.user_uploaded';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const crops = [
  {
    file: 'dont-wake-up-the-baby.jpg',
    left: 21,
    top: 30,
    width: 652,
    height: 367,
  },
  {
    file: 'duck-dominion.jpg',
    left: 7,
    top: 0,
    width: 665,
    height: 372,
  },
  {
    file: 'cooked.jpg',
    left: 16,
    top: 27,
    width: 653,
    height: 371,
  },
  {
    file: 'the-update-game.jpg',
    left: 52,
    top: 42,
    width: 579,
    height: 354,
  },
  {
    file: 'ninja-leveling.jpg',
    left: 25,
    top: 18,
    width: 657,
    height: 370,
  },
];

const directUploads = [
  { file: 'run-a-dry-cleaner.jpg', upload: 'media_1794675065859_c14bdb87.jpg' },
  { file: 'miami-crime-rp.jpg', upload: 'media_1794667458812_6558e5f5.jpg' },
  { file: 'become-the-farmer.jpg', upload: 'media_1794674958834_17539601.jpg' },
  { file: 'beam-and-steal-an-egg.jpg', upload: 'media_1794675177675_d756fe27.jpg' },
  { file: 'one-piece-farm.jpg', upload: 'media_1794675237837_0f996e3e.jpg' },
  { file: 'beats-to-get-rich.jpg', upload: 'media_1794675344521_34e582cd.jpg' },
];

async function run() {
  // 1. Cropped artwork
  for (const c of crops) {
    const inputPath = path.join(srcDir, c.file);
    const outputPath = path.join(outDir, c.file);
    await sharp(inputPath)
      .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
      .toFile(outputPath);
    console.log(`Generated thumbnail for ${c.file}: ${c.width}x${c.height}`);
  }

  // 2. Direct high-res uploads
  for (const d of directUploads) {
    const inputPath = path.join(userUploadsDir, d.upload);
    const outputPath = path.join(outDir, d.file);
    await sharp(inputPath).jpeg({ quality: 95 }).toFile(outputPath);
    console.log(`Saved direct high-res banner for ${d.file}`);
  }

  console.log('All 10 game thumbnails processed successfully!');
}

run().catch(console.error);
