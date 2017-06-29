const childProcess = require('child_process');
const path = require('path');
const fs = require('fs');
const purifycss = require('purify-css');

const body = childProcess.execSync(`node ${path.resolve(__dirname, './dist/app-bundle')}`);

const html = fs.readFileSync('./index.html', 'utf8');
const css = fs.readFileSync('./dist/styles.css', 'utf8');
const reactParsedHtml = html.replace(/<body>([\s\S]*)<\/body>/gm, `<body>${body}</body>`);

purifycss(reactParsedHtml, css, { output: './dist/purified.css', minify: true });

fs.writeFileSync('./dist/index.html', reactParsedHtml);
console.log('Template Saved!');
