import { useEffect, useState } from 'react';

interface StopLightParams {
  stopDelay?: number;
  slowDelay?: number;
  goDelay?: number;
}

type StopLightState = 'stop' | 'slow' | 'go';

const DEFAULT_STOP_DELAY = 4500;
const DEFAULT_SLOW_DELAY = 2000;
const DEFAULT_GO_DELAY = 6000;

const StopLight = ({
  stopDelay = DEFAULT_STOP_DELAY,
  slowDelay = DEFAULT_SLOW_DELAY,
  goDelay = DEFAULT_GO_DELAY
}: StopLightParams) => {
  const [lightState, setLightState] = useState<StopLightState>('stop');

  useEffect(() => {
    const stopTimer = setTimeout(() => {
      if (lightState === 'stop') {
        setLightState('slow');
      }
    }, stopDelay);

    const slowTimer = setTimeout(() => {
      if (lightState === 'slow') {
        setLightState('go');
      }
    }, slowDelay);

    const goTimer = setTimeout(() => {
      if (lightState === 'go') {
        setLightState('stop');
      }
    }, goDelay);

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
