import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Mail from './index';

const html = ReactDOMServer.renderToStaticMarkup(<Mail />);
export default html;

process.stdout.write(html);
