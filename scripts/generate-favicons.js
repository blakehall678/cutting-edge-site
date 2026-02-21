const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function generate() {
  const src = path.join(__dirname, '..', 'public', 'logo.png');
  if (!fs.existsSync(src)) {
    console.error('Missing source image: public/logo.png');
    process.exit(1);
  }

  const outDir = path.join(__dirname, '..', 'public', 'icons');
  await ensureDir(outDir);

  const sizes = [16, 32, 48, 64, 128, 180, 192, 256, 512];
  const pngPaths = [];

  for (const size of sizes) {
    const out = path.join(outDir, `icon-${size}.png`);
    await sharp(src).resize(size, size, { fit: 'contain' }).png().toFile(out);
    pngPaths.push(out);
    console.log('Written', out);
  }

  // Create apple-touch-icon (180)
  const apple = path.join(__dirname, '..', 'public', 'apple-touch-icon.png');
  await sharp(src).resize(180, 180).png().toFile(apple);
  console.log('Written', apple);

  // Create favicon.ico from a selection of sizes (256, 128, 64, 32, 16)
  const icoPngs = [256, 128, 64, 32, 16].map((s) => path.join(outDir, `icon-${s}.png`));
  try {
    const icoBuffers = await Promise.all(icoPngs.map((p) => fs.promises.readFile(p)));
    const icoBuffer = await toIco(icoBuffers);
    const icoPath = path.join(__dirname, '..', 'public', 'favicon.ico');
    fs.writeFileSync(icoPath, icoBuffer);
    console.log('Written', icoPath);
  } catch (err) {
    console.error('Could not create favicon.ico via to-ico:', err && err.message ? err.message : err);
    console.error('You can still use the PNG icons in public/icons/ or run an alternative generator.');
  }

  // Create favicon-512 (copy)
  const fav512 = path.join(__dirname, '..', 'public', 'favicon-512.png');
  await sharp(src).resize(512, 512).png().toFile(fav512);
  console.log('Written', fav512);

  console.log('All icons generated.');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
