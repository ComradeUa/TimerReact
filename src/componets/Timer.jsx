import { useState } from 'react';
import './Timer.scss';
const Timer = ({ hours, minutes, seconds, setHours, setMinutes, setSeconds }) => {
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  const handleStart = () => {
    const totalSeconds = Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
    if (totalSeconds > 0 && !isActive) {
      setIsActive(true);
      let currentSeconds = totalSeconds;

      const id = setInterval(() => {
        if (currentSeconds <= 0) {
          clearInterval(id);
          setIsActive(false);
          return;
        }
        currentSeconds--;
        setHours(String(Math.floor(currentSeconds / 3600)));
        setMinutes(String(Math.floor((currentSeconds % 3600) / 60)));
        setSeconds(String(currentSeconds % 60));
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleStop = () => {
    setIsActive(false);
    clearInterval(intervalId);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setIsActive(false);
    setHours('00');
    setMinutes('00');
    setSeconds('00');
  };

  return (
    <div className="flex justify-center mt-40">
      <div className="cont-container rounded bg-[#F9F9F9] w-90 h-80">
        <h1 className="text">TIMER</h1>
        <div className="flex flex-row items-start justify-center m-10 mx-40 space-x-10">
          <div className="hours">
            <input
              className="hours-text"
              type="text"
              placeholder="00"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
            <h1 className="text-button">Hours</h1>
          </div>
          <div className="minutes">
            <input
              className="hours-text"
              type="text"
              placeholder="00"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
            <h1 className="text-button">Minutes</h1>
          </div>
          <div className="seconds">
            <input
              className="hours-text"
              type="text"
              placeholder="00"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
            />
            <h1 className="text-button">Seconds</h1>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center m-10 mx-40 space-x-10">
          <button className="button_style_start" onClick={handleStart}>
            START
          </button>
          <button className="button_style_pause" onClick={handleStop}>
            PAUSE
          </button>
          <button className="button_style_reset" onClick={handleReset}>
            RESET
          </button>
        </div>
        <div className="style_stick"></div>
      </div>
    </div>
  );
};

export default Timer;
