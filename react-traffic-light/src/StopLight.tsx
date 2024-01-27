import { useEffect, useState } from 'react';

interface StopLightParams {
  stopAndGoDelay?: number;
  slowDelay?: number;
}

type StopLightState = 'stop' | 'slow' | 'go';

// const DEFAULT_STOP_AND_GO_DELAY = 5000;
// const DEFAULT_SLOW_DELAY = 2000;

const StopLight = ({ stopAndGoDelay, slowDelay }: StopLightParams) => {
  const [lightState, setLightState] = useState<StopLightState>('stop');

  useEffect(() => {
    const stopTimer = setTimeout(() => {
      if (lightState === 'stop') {
        setLightState('slow');
      }
    }, stopAndGoDelay);

    const slowTimer = setTimeout(() => {
      if (lightState === 'slow') {
        setLightState('go');
      }
    }, slowDelay);

    const goTimer = setTimeout(() => {
      if (lightState === 'go') {
        setLightState('stop');
      }
    }, stopAndGoDelay);

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
};

export default StopLight;
