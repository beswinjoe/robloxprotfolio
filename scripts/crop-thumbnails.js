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
    file: 'run-a-dry-cleaner.jpg',
    left: 4,
    top: 0,
    width: 666,
    height: 376,
  },
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

async function run() {
  // 1. Standard game artwork crops
  for (const c of crops) {
    const inputPath = path.join(srcDir, c.file);
    const outputPath = path.join(outDir, c.file);
    await sharp(inputPath)
      .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
      .toFile(outputPath);
    console.log(`Generated thumbnail for ${c.file}: ${c.width}x${c.height}`);
  }

  // 2. Miami Crime RP: High-res cinematic poster from user upload
  const miamiPoster = path.join(userUploadsDir, 'media_1794667458812_6558e5f5.jpg');
  await sharp(miamiPoster)
    .toFile(path.join(outDir, 'miami-crime-rp.jpg'));
  console.log('Generated Miami Crime RP poster: 1024x579');

  // 3. Become the Farmer: Official high-res game banner from user upload
  const farmerInput = path.join(userUploadsDir, 'media_1794674958834_17539601.jpg');
  await sharp(farmerInput)
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'become-the-farmer.jpg'));
  console.log('Generated official Become the Farmer thumbnail: 1024x574');

  console.log('All 8 pure thumbnails processed successfully!');
}

run().catch(console.error);
