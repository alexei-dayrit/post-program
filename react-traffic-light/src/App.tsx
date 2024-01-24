import { useState, useEffect } from 'react';
import './App.css';

type StopLightState = 'stop' | 'slow' | 'go'

const STOP_AND_GO_DELAY = 5000;
const SLOW_DELAY = 2000;

function App() {
  const [lightState, setLightState] = useState<StopLightState>('stop');

  useEffect(() => {
    const stopTimer = setTimeout(() => {
      if (lightState === 'stop') {
        setLightState('slow');
      }
    }, STOP_AND_GO_DELAY);

    const slowTimer = setTimeout(() => {
      if (lightState === 'slow') {
        setLightState('go');
      }
    }, SLOW_DELAY);

    const goTimer = setTimeout(() => {
      if (lightState === 'go') {
        setLightState('stop');
      }
    }, STOP_AND_GO_DELAY);

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
