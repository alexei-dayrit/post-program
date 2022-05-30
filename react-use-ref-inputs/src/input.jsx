import React, { useState, useEffect, useRef } from 'react';

export default function Input() {
  const [name, setName] = useState('');
  const inputRef = useRef();
  const prevName = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <h1>Hello, my name is &#34;{name}&#34;</h1>
      <h3>But it used to be &#34;{prevName.current}&#34;</h3>
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
