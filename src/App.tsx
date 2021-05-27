import React from 'react';
import { TodoApp } from './components/todo/TodoApp';
import { TodoDetailApp } from './components/todo/detail/TodoDetailApp';

function App() {
  return (
    <div>
      <h1>Welcome todo app.</h1>
      <div style={{ display: 'flex' }}>
        <TodoApp />
        <TodoDetailApp />
      </div>
    </div>
  );
}

export default App;
