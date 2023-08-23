import { useState } from 'react'
import './App.css'

function App() {
  const setValuer = () => "";


  return (
    <>
      <div className="app">
        <h1>Progress bar</h1>
        {/* <ProgressBar width={val} /> */}
        <form>
          <label htmlFor="html">Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
      </div>
    </>
  )
}

export default App
