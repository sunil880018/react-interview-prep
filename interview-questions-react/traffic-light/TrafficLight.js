import { useEffect, useState } from 'react';
import './styles.css';

const TrafficLight = () => {
  const [lightStatus, setLightStatus] = useState(3); // 1: yellow, 2: green, 3: red

  useEffect(() => {
    let timeoutId;

    if (lightStatus === 1) {
      timeoutId = setTimeout(() => setLightStatus(2), 1000); // Yellow → Green
    } else if (lightStatus === 2) {
      timeoutId = setTimeout(() => setLightStatus(3), 2000); // Green → Red
    } else if (lightStatus === 3) {
      timeoutId = setTimeout(() => setLightStatus(1), 3000); // Red → Yellow
    }

    return () => clearTimeout(timeoutId); // Clear timeout on unmount or update
  }, [lightStatus]);

  return (
    <div>
      <h2 data-testid="title">Traffic Lights</h2>
      <div className="traffic-light" data-testid="traffic-light">
        <div
          id="red-light"
          data-testid="red-light"
          className={`circle ${lightStatus === 3 ? 'red-on' : ''}`}
        ></div>
        <div
          id="yellow-light"
          data-testid="yellow-light"
          className={`circle ${lightStatus === 1 ? 'yellow-on' : ''}`}
        ></div>
        <div
          id="green-light"
          data-testid="green-light"
          className={`circle ${lightStatus === 2 ? 'green-on' : ''}`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
