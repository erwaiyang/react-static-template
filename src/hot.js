import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Mail from './index';

const rootEl = document.getElementById('root');
const render = Comp =>
  ReactDOM.render(
    <AppContainer>
      <Comp />
    </AppContainer>,
    rootEl);

render(Mail);
if (module.hot) module.hot.accept('./index', () => render(Mail));
