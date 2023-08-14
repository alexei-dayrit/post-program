import { useState } from "react";
import './App.css'

export default function App() {
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [intervalId, setIntervalId] = useState(null)

  const startTimer = () => {
    // Complete this function
  };
  const stopTimer = () => {
    // Complete this function
  };
  const resetTimer = () => {
    // Complete this function
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      <span> {min} mins </span>
      <span> {sec} secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
