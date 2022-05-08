import React, { useState } from 'react';

export default function CounterObjState() {
  const [state, setState] = useState({ count1: 0, count2: 0 });

  function decrementCounter() {
    setState(currentState => {
      return { ...currentState, count1: currentState.count1 - 1 };
    });
  }

  return (
    <div style={{ textAlign: 'center', flex: 'display: flex' }}>
      <h1>Counter - Object State</h1>
      <p>2 independent counters:</p>
      <button onClick={decrementCounter}>-</button>
      <span style={{ padding: '0.5rem' }}>
        First State: {state.count1}
      </span>
      <button onClick={() => setState(currentState => ({ ...currentState, count1: currentState.count1 + 1 }))}>
        +
      </button>

      <div style={{ paddingTop: '1rem' }}>
        <button onClick={() => setState(currentState => ({ ...currentState, count2: currentState.count2 - 2 }))}>-</button>
        <span style={{ padding: '0.5rem' }}>
          Second State: {state.count2}
        </span>
        <button onClick={() => setState(currentState => ({ ...currentState, count2: currentState.count2 + 2 }))}>
          +
        </button>
      </div>
    </div>
  );
}
