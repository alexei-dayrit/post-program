import { useState } from "react";
import './App.css'

export default function App() {
  const [timer, setTimer] = useState(0)
  const [intervalId, setIntervalId] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)

  const startTimer = () => {
    console.log('start timer')
    setIsDisabled(true)
    setIntervalId(setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000));
  };

  const stopTimer = () => {
    console.log('stop timer')
    setIsDisabled(false)
    clearInterval(intervalId)
  };

  const resetTimer = () => {
    console.log('reset timer')
    setIsDisabled(false)
    clearInterval(intervalId)
    setTimer(0)
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {Math.trunc(timer / 60)} mins </span>
      <span> {timer % 60} secs</span>
      <div>
        <button onClick={startTimer} disabled={isDisabled}>
          Start
        </button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
