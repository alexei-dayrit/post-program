import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function decrementCounter() {
    setCounter(prevCounter => prevCounter - 1);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter</h1>
      <button onClick={decrementCounter}>-</button>
      <span style={{ padding: '0.5rem' }}>
        {counter}
      </span>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>+</button>
    </div>
  );
}
