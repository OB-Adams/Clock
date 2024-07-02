import { useState } from "react";

function Clock() {
  const [breakTimer, setBreakTimer] = useState("5");
  const [sessionTimer, setSessionTimer] = useState("25");
  const [countdown, setCountdown] = useState("25");
  return (
    <div className="wrapper">
      <h1 id="header">25 + 5 Clock</h1>
      <div className="length-container">
        <div className="break-length">
          <h2 id="break-label">Break length</h2>
          <div className="sub-break-length">
            <button id="break-decrement">
              <i className="fa-solid fa-down-long"></i>
            </button>
            <i id="break-length">{breakTimer}</i>
            <button id="break-increment">
              <i className="fa-solid fa-up-long"></i>
            </button>
          </div>
        </div>
        <div className="session-length">
          <h2 id="session-label">Session length</h2>
          <div className="sub-session-length">
            <button id="session-decrement">
              <i className="fa-solid fa-down-long"></i>
            </button>
            <i id="session-length">{sessionTimer}</i>
            <button id="session-increment">
              <i className="fa-solid fa-up-long"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="timer-container">
        <h3 id="timer-label">Session</h3>
        <h1 id="time-left">{countdown + `:00`}</h1>
      </div>
      <div className="start-stop-container">
        <button id="start-stop"><i className="fa-solid fa-pause"></i></button>
        <button id="reset"><i className="fa-solid fa-rotate-right"></i></button>
      </div>
      <div id="me">
        Designed and Coded by <a href="https://github.com/OB-Adams">OB</a>
      </div>
    </div>
  );
}

export default Clock;
