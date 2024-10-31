import React from 'react';
import './Buttons.scss';
export default function Buttons({ handleStart, handleStop, handleReset }) {
  return (
    <>
      <button className="button_style_start" onClick={handleStart}>
        START
      </button>
      <button className="button_style_pause" onClick={handleStop}>
        PAUSE
      </button>
      <button className="button_style_reset" onClick={handleReset}>
        RESET
      </button>
    </>
  );
}
