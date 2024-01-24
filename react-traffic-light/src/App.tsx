import { useState, useEffect } from 'react';
import './App.css';

type StopLightState = 'stop' | 'slow' | 'go'

function App() {
  const [lightState, setLightState] = useState<StopLightState>('stop');

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

  function getLightClass(light: StopLightState) {
    return `light ${light} ${lightState === light ? 'on' : ''}`;
  }

  return (
    <div className="App">
      <div className="traffic-light">
        <div className={getLightClass('stop')}></div>
        <div className={getLightClass('slow')}></div>
        <div className={getLightClass('go')}></div>
      </div>
    </div>
  );
}

export default App;
