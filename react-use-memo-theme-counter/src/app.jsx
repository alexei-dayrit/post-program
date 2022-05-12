import React, { useState, useEffect, useMemo } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const doubledCount = useMemo(() => {
    return demoSlowFunction(count);
  }, [count]);
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? '#121212' : 'white',
      color: dark ? 'white' : '#121212',
      padding: '1rem'
    };
  }, [dark]);
  console.log('dark:', dark);

  // Demos that 'dark' state change causes rerender due to 'themeStyle' having
  // different references w/o useMemo in 'themeStyle' var
  useEffect(() => {
    console.log('Changed theme!');
  }, [themeStyle]);

  return (
    <>
      <div style={themeStyle}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          Increment +
        </button>
        <h2>Dark Mode: {dark ? 'on' : 'off'}</h2>
        <button onClick={() => setDark(prev => !prev)}>
          Change Theme
        </button>
        <h2>Doubled Counter: {doubledCount}</h2>
      </div>
    </>
  );
}

const demoSlowFunction = num => {
  console.log('demoSlowFunction running');
  for (let i = 0; i <= 1000000000; i++) { }
  return num * 2;
};
