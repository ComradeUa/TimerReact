import './App.css';
import Timer from './componets/Timer.jsx';
import { useState } from 'react';

function App() {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [isBlackTheme, setIsBlackTheme] = useState(false);
  const toggleTheme = () => {
    setIsBlackTheme((prevTheme) => !prevTheme);
  };

  return (
    <div>
      <Timer
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        isBlackTheme={isBlackTheme}
      />
    </div>
  );
}

export default App;
