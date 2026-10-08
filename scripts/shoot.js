// Headless page screenshots for visual review. Works even when no browser window is visible.
//
// 1. Start the dev server:   npm run dev
// 2. Run:                    node scripts/shoot.js <path> <name> [width] [height]
//    e.g.                    node scripts/shoot.js /labs labs
//                            node scripts/shoot.js / home-mobile 375 812
//
// Images land in .shots/ (git-ignored), one per screen of scrolling.
// On Windows Git Bash, prefix with MSYS_NO_PATHCONV=1 so "/" is not rewritten to a Windows path.
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const urlPath = process.argv[2] || '/';
const name = process.argv[3] || 'home';
const width = parseInt(process.argv[4] || '1280', 10);
const height = parseInt(process.argv[5] || '800', 10);
const scale = width < 600 ? 1 : 0.6;
const outDir = path.join(process.cwd(), '.shots');
fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: scale });
  await page.goto('http://localhost:3000' + urlPath, { waitUntil: 'networkidle2', timeout: 90000 });
  await new Promise((r) => setTimeout(r, 4500)); // let the first-visit preloader finish
  await page.addStyleTag({ content: 'html{scroll-behavior:auto !important}' });
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = Math.round(height * 0.9);
  let n = 0;
  for (let y = 0; y < total && n < 16; y += step) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await new Promise((r) => setTimeout(r, 1100)); // let scroll-reveal animations play
    await page.screenshot({ path: path.join(outDir, `${name}-${String(n).padStart(2, '0')}.jpg`), type: 'jpeg', quality: 72 });
    n++;
  }
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
  console.log(JSON.stringify({ name, pageHeight: total, shots: n, horizontalOverflow: overflow }));
  await browser.close();
})();
