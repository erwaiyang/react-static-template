const childProcess = require('child_process');
const path = require('path');
const fs = require('fs');

const body = childProcess.execSync(`node ${path.resolve(__dirname, './dist/app-bundle')}`);

const html = fs.readFileSync('./index.html', 'utf8');
const result = html.replace(/<body>([\s\S]*)<\/body>/gm, `<body>${body}</body>`);
fs.writeFileSync('./dist/index.html', result);
console.log('Template Saved!');
