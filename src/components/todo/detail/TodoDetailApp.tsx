import React, { useState } from 'react';
import { useTodoDetail } from '../hooks/useTodoDetail';

export const TodoDetailApp = () => {
  const [id, setId] = useState<string | undefined>();
  const { data } = useTodoDetail(Number(id));

  return (
    <div style={{ width: '50%', height: '50vh', border: '1px solid black', padding: '8px' }}>
      <h1>Find Todo</h1>
      <input onChange={(e) => setId(e.target.value)} />

      <div>
        <div>Result:</div>
        {data && (
          <div>
            <div>{data.id}</div>
            <div>{data.title}</div>
          </div>
        )}
      </div>
    </div>
  );
};
