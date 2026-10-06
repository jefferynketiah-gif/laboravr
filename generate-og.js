const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&display=swap');
        body {
          margin: 0;
          padding: 0;
          width: 1200px;
          height: 630px;
          background: #0A0B10;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          color: #E8E9F0;
        }
        .container {
          display: flex;
          align-items: center;
          gap: 60px;
          margin-top: -30px;
          margin-left: -50px;
        }
        .mark {
          width: 160px;
          height: auto;
        }
        .text-container {
          display: flex;
          flex-direction: column;
        }
        .logo-text {
          font-size: 150px;
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1;
          margin-bottom: 20px;
        }
        .labora {
          color: #E8E9F0;
        }
        .vr {
          color: #7C5CFF;
        }
        .subtext {
          font-size: 40px;
          color: #8C8D9C;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
        .url {
          position: absolute;
          bottom: 60px;
          left: 100px;
          font-size: 32px;
          color: #7C5CFF;
          font-weight: 500;
        }
        .glow {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(124,92,255,0.05) 0%, transparent 60%);
          z-index: 0;
          pointer-events: none;
        }
      </style>
    </head>
    <body>
      <div class="glow"></div>
      <div class="container" style="position: relative; z-index: 10;">
        <svg
          viewBox="0 0 255 231"
          class="mark"
        >
          <rect x="0" y="0" width="46" height="231" fill="#E8E9F0" />
          <rect x="0" y="201" width="143" height="30" fill="#E8E9F0" />
          <rect x="179" y="14" width="76" height="153" fill="#7C5CFF" />
        </svg>
        <div class="text-container">
          <div class="logo-text"><span class="labora">Labora</span><span class="vr">VR</span></div>
          <div class="subtext">Virtual Science Labs for African Universities</div>
        </div>
      </div>
      <div class="url">laboravr.com</div>
    </body>
    </html>
  `;
  
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'public/og-v2.png' });
  await browser.close();
})();
