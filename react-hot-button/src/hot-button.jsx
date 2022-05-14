import React, { useState } from 'react';

export default function HotButton() {
  const [count, setCounter] = useState(0);

  const buttonStyle = () => {
    if (count < 3) {
      return null;
    } else if (count < 6) {
      return {
        backgroundColor: 'rgb(53 28 117)',
        color: 'white'
      };
    } else if (count < 9) {
      return {
        backgroundColor: 'rgb(103 78 167)',
        color: 'white'
      };
    } else if (count < 12) {
      return {
        backgroundColor: 'rgb(224 102 102)',
        color: 'white'
      };
    } else if (count < 15) {
      return {
        backgroundColor: 'rgb(246 178 107)',
        color: 'white'
      };
    } else if (count < 18) {
      return {
        backgroundColor: 'rgb(231 231 73)'
      };
    } else {
      return {
        color: 'red',
        borderColor: 'red',
        backgroundColor: 'rgb(255 255 255)'
      };
    }
  };

  return (
    <>
      <button
        style={ buttonStyle() }
        onClick={() => setCounter(prevCount => prevCount + 1)}
      >
        Hot Button: {count}
      </button>
    </>
  );
}
