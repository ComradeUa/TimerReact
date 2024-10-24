import './App.css';
import Timer from './componets/Timer.jsx';
import { useState } from 'react';

function App() {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  return (
    <div>
      <Timer
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
    </div>
  );
}

export default App;
