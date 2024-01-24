import { useState } from 'react'
import './App.css'

function App() {
  const [lightState, setLightState] = useState('stop');

  return (
      <div className="App">
        <div className="traffic-light">
          <div
            className={`light stop ${lightState === 'stop' ? 'on' : ''}`}></div>
          <div
            className={`light slow ${lightState === 'slow' ? 'on' : ''}`}></div>
          <div className={`light go ${lightState === 'go' ? 'on' : ''}`}></div>
        </div>
      </div>
  );
}

export default App
