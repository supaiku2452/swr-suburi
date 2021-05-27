import React from 'react';
import { useTodo } from './hooks/useTodo';

export const TodoApp = () => {
  const { data, isLoading } = useTodo();

  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div style={{ width: '50%', height: '50vh', border: '1px solid black', padding: '8px' }}>
          <ul>{data && data.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
        </div>
      )}
    </>
  );
};
