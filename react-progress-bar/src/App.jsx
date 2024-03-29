import { useState } from 'react'
import './App.css'
import ProgressBar from './ProgressBar';

function App() {
  const [widthValue, setWidthValue] = useState(0);
  const setValuer = (e) => {
    setWidthValue(e.target.value);
  };

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={widthValue} />
        <form>
          <label htmlFor="html">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  );

/* FIRST SOLUTION
  const progressBarStyle = {
    width: `${widthValue}%`,
    height: "25px",
    backgroundColor: "red", // Background color for the filled progress
    borderRadius: "10px",
  };

  const emptyProgressBarStyle = {
    height: "25px",
    backgroundColor: "lightgray", // Background color for the empty part
    borderRadius: "10px",
  };

  return (
    <>
      <div className="app">
        <h1>Progress bar</h1>
        <form>
          <div style={emptyProgressBarStyle}>
            <div style={progressBarStyle}>
              {widthValue}%
            </div>
          </div>
          <label htmlFor="html">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  )
*/
}

export default App
