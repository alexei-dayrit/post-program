import { useState } from 'react'
import './App.css'

function App() {
  const [widthValue, setWidthValue] = useState(0);

  const setValuer = () => "";

  const progressBarStyle = {

  };

  const emptyProgressBarStyle = {

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
}

export default App
