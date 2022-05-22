import React, { useState } from 'react';

export default function Stopwatch() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleStopwatchButton = () => {
    if (!isCounting) {
      setIsCounting(true);
      setIntervalId(setInterval(() => {
        tick();
      }, 1000));
    } else {
      setIsCounting(false);
      clearInterval(intervalId);
    }
  };

  const tick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const reset = () => {
    if (!isCounting) {
      setCount(0);
    }
  };

  return (
    <div className='container'>
      <h1 className='col-100'>Stopwatch Component</h1>
      <div className={`col-100 stopwatch ${!isCounting && ('clickable-face')}`} onClick={reset}>
        {count}
      </div>
      <i
        className={`fa-solid fa-${!isCounting ? 'play' : 'pause'}`}
        onClick={handleStopwatchButton}
      ></i>
    </div>
  );
}
