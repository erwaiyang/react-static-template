const childProcess = require('child_process');
const path = require('path');
const fs = require('fs');

const body = childProcess.execSync(`node ${path.resolve(__dirname, './dist/app-bundle')}`);

fs.readFile('./index.html', 'utf8', (err, html) => {
  if (err) throw err;
  const result = html.replace(/<body>([\s\S]*)<\/body>/gm, `<body>${body}</body>`);
  fs.writeFile('./dist/index.html', result, (werr) => {
    if (werr) throw werr;
    console.log('Template Saved!');
  });
});
