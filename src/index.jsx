import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Counter from './counter/counter';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Counter  counter={10}/>
  </React.StrictMode>
);

