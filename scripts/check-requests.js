// Loads each page in headless Chrome, scrolls to the bottom, and reports any request that failed
// or returned an error status (broken images, missing files). Needs the dev server running.
//   node scripts/check-requests.js
const puppeteer = require('puppeteer');

const pages = ['/', '/labs', '/about', '/contact'];

(async () => {
  const browser = await puppeteer.launch();
  let problems = 0;
  for (const p of pages) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    const bad = [];
    page.on('response', (r) => {
      if (r.status() >= 400) bad.push(`${r.status()} ${r.url().replace('http://localhost:3000', '')}`);
    });
    page.on('requestfailed', (r) => bad.push(`FAILED ${r.url().replace('http://localhost:3000', '')}`));
    await page.goto('http://localhost:3000' + p, { waitUntil: 'networkidle2', timeout: 90000 });
    await new Promise((r) => setTimeout(r, 3500));
    const height = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < height; y += 600) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await new Promise((r) => setTimeout(r, 250));
    }
    await new Promise((r) => setTimeout(r, 1500));
    // ignore the dev server's hot-reload socket
    const real = bad.filter((b) => !b.includes('webpack-hmr') && !b.includes('hot-update'));
    console.log(`${p.padEnd(9)} ${real.length === 0 ? 'OK' : 'PROBLEMS'}`);
    real.forEach((b) => console.log('   ', b));
    problems += real.length;
    await page.close();
  }
  await browser.close();
  console.log(problems === 0 ? '\nNo failed requests.' : `\n${problems} failed request(s).`);
  process.exit(problems === 0 ? 0 : 1);
})();
