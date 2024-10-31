import React from 'react';
import './Input.scss';
export default function Input({ hours, minutes, seconds, setHours, setMinutes, setSeconds }) {
  return (
    <>
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
    </>
  );
}
