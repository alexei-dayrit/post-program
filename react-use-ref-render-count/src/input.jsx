import React, { useState, useEffect, useRef } from 'react';

export default function Input() {
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  // renderCount looks like this: {current: 0}

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input type="text" value={name} onChange={event => setName(event.target.value)}/>
      <h1>Hello, my name is... {name}</h1>
      <h2>Component has rendered {renderCount.current} times </h2>
    </>
  );
}
