import React, { useState, useRef } from 'react';

export default function Input() {
  const [name, setName] = useState('');

  return (
    <>
      <input type="text" value={name} onChange={event => setName(event.target.value)}/>
      <h1>Hello, my name is... {name}</h1>
    </>
  );
}
