import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Counter from './counter/counter';
import TaskList from './todo-list/task-list';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Counter  counter={10}/>
    <TaskList />
  </React.StrictMode>
);

