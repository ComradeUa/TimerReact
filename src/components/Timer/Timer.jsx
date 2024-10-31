import React from 'react';
import Input from './Input/Input';
import Buttons from './Buttons/Buttons';
import useTimer from '../hooks/useTimer';
import './Timer.scss';
const Timer = () => {
  const {
    hours,
    minutes,
    seconds,
    setHours,
    setMinutes,
    setSeconds,
    handleStart,
    handleStop,
    handleReset,
  } = useTimer(0, 0, 0);
  return (
    <div className="flex justify-center mt-40">
      <div className="cont-container rounded bg-[#F9F9F9] w-90 h-80">
        <h1 className="text">TIMER</h1>
        <div className="flex flex-row items-start justify-center m-10 mx-40 space-x-10">
          <Input
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            setHours={setHours}
            setMinutes={setMinutes}
            setSeconds={setSeconds}
          />
        </div>
        <div className="flex flex-row items-start justify-center m-10 mx-40 space-x-10">
          <Buttons handleStart={handleStart} handleStop={handleStop} handleReset={handleReset} />
        </div>
        <div className="style_stick"></div>
      </div>
    </div>
  );
};

export default Timer;
