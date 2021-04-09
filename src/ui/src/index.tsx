import * as React from 'react';
import { render } from 'react-dom';
import './initializer';
import App from './app';
import './index.css';
import '@alicloud/console-components/dist/wind.css';

render(
  <App />,
  document.getElementById('example'),
);
