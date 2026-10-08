const fs = require('fs');

let content = fs.readFileSync('pages/index.jsx', 'utf8');

// Remove import
content = content.replace(/import Lab3DViewer from '\.\.\/components\/Lab3DViewer';\r?\n/, '');

// Replace the 3 column layout back to 2 columns and remove the Lab3DViewer div
const threeColRegex = /<div className="mt-12 grid lg:grid-cols-3 gap-8">[\s\S]*?<Lab3DViewer \/>\s*<\/div>\s*<\/div>\s*<\/div>/;

const twoColReplacement = `<div className="mt-12 grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  A strong acid–strong base titration, solved live from the same
                  equations the headset uses. Overshoot it and see what a spoiled
                  titration costs.
                </p>
                <TitrationDemo />
              </div>
              <div>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  A qualitative analysis cation test. Observe the precipitate, exactly as
                  specified in the marking scheme.
                </p>
                <PrecipitateDemo />
              </div>
            </div>`;

content = content.replace(threeColRegex, twoColReplacement);

fs.writeFileSync('pages/index.jsx', content);
