const fs = require('fs');

function processFile(path) {
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');

  // Replace the eyebrows
  content = content.replace(
    /<span className="w-6 h-px bg-uv" \/>\s*<p className="font-mono text-\[11px\] tracking-\[0\.2em\] text-uv">(.*?)<\/p>/g,
    `<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-uv/10 text-uv font-semibold text-sm border border-uv/20 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-uv" />
                $1
              </div>`
  );

  // Remove 'grain' from classNames
  content = content.replace(/ grain/g, '');

  // Reduce border-radius sharpness globally in the file (like rounded-xl -> rounded-2xl or 3xl)
  content = content.replace(/rounded-xl/g, 'rounded-3xl');

  fs.writeFileSync(path, content);
}

processFile('pages/labs.jsx');
processFile('pages/about.jsx');
processFile('components/PageHeader.jsx');
processFile('components/CinematicHero.jsx');
processFile('components/Navbar.jsx');
