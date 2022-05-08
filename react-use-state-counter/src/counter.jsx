import React, { useState } from 'react';
import CounterObjState from './counter-obj-state';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function decrementCounter() {
    setCounter(currentCounter => currentCounter - 1);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter - Single state</h1>
      <button onClick={decrementCounter}>-</button>
      <span style={{ padding: '0.5rem' }}>
        {counter}
      </span>
      <button onClick={() => setCounter(currentCounter => currentCounter + 1)}>+</button>
      <CounterObjState />
    </div>
  );
}
