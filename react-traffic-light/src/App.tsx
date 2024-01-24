import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [lightState, setLightState] = useState('stop');

  useEffect(() => {
    const stopTimer = setTimeout(() => {
      if (lightState === 'stop') {
        setLightState('slow');
      }
    }, 5000);

    const slowTimer = setTimeout(() => {
      if (lightState === 'slow') {
        setLightState('go');
      }
    }, 3000);

    const goTimer = setTimeout(() => {
      if (lightState === 'go') {
        setLightState('stop');
      }
    }, 5000);

    return () => {
      clearTimeout(stopTimer), clearTimeout(slowTimer), clearTimeout(goTimer);
    };
  });

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
