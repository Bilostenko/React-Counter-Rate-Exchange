import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import TaskList from './task-list';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App  counter={10}/>
    <TaskList />
  </React.StrictMode>
);

