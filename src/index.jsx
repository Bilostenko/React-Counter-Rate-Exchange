import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Counter from './counter/counter';
import Money from './money/money';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Counter />
    <Money />
  </React.StrictMode>
);

