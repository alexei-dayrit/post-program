import { useState } from "react";
import './App.css'

export default function App() {
  const [timer, setTimer] = useState(0)
  const [intervalId, setIntervalId] = useState(null)

  const startTimer = () => {
    console.log('start timer')
    setIntervalId(setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000));
  };

  const stopTimer = () => {
    console.log('stop timer')
    clearInterval(intervalId)

  };

  const resetTimer = () => {
    console.log('reset timer')
    clearInterval(intervalId)
    setTimer(0)
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {Math.trunc(timer / 60)} mins </span>
      <span> {timer % 60} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
