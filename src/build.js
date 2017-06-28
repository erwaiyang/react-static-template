import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Mail from './index';

const html = ReactDOMServer.renderToStaticMarkup(<Mail />);
process.stdout.write(html);
