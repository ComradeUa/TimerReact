import { useState, useEffect } from 'react';

const useTimer = (initialHours = 0, initialMinutes = 0, initialSeconds = 0) => {
  const [hours, setHours] = useState(String(initialHours));
  const [minutes, setMinutes] = useState(String(initialMinutes));
  const [seconds, setSeconds] = useState(String(initialSeconds));
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

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

  return {
    hours,
    minutes,
    seconds,
    setHours,
    setMinutes,
    setSeconds,
    handleStart,
    handleStop,
    handleReset,
  };
};

export default useTimer;
