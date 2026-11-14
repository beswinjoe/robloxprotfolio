const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../public/games');
const outDir = path.join(__dirname, '../public/games/thumbs');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Pixel-perfect artwork bounding boxes extracted from genuine uploaded screenshots
const crops = [
  {
    file: 'run-a-dry-cleaner.jpg',
    left: 4,
    top: 0,
    width: 666,
    height: 376,
  },
  {
    file: 'miami-crime-rp.jpg',
    left: 0,
    top: 21,
    width: 685,
    height: 370,
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
  {
    file: 'become-the-farmer.jpg',
    left: 23,
    top: 16,
    width: 653,
    height: 367,
  },
];

async function run() {
  for (const c of crops) {
    const inputPath = path.join(srcDir, c.file);
    const outputPath = path.join(outDir, c.file);
    await sharp(inputPath)
      .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
      .toFile(outputPath);
    console.log(`Generated pure thumbnail for ${c.file}: ${c.width}x${c.height}`);
  }

  // Also extract the two individual game cards from featured-showcase.jpg
  // Card 1: Do Not Stop (x: 0 to 410)
  await sharp(path.join(srcDir, 'featured-showcase.jpg'))
    .extract({ left: 2, top: 0, width: 408, height: 281 })
    .toFile(path.join(outDir, 'do-not-stop.jpg'));

  // Card 2: Clean all the... (x: 415 to 820)
  await sharp(path.join(srcDir, 'featured-showcase.jpg'))
    .extract({ left: 415, top: 0, width: 405, height: 281 })
    .toFile(path.join(outDir, 'clean-all-the.jpg'));

  console.log('All 10 pure thumbnails generated successfully!');
}

run().catch(console.error);
