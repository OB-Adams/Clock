import { useState, useEffect } from "react";

function Clock() {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            if (isSession) {
              setIsSession(false);
              return breakLength * 60;
            } else {
              setIsSession(true);
              return sessionLength * 60;
            }
          } else return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, breakLength, sessionLength, isSession]);

  const handleDecrement = (type) => {
    if (type === "session" && sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft((sessionLength - 1) * 60)
    } else if (type === "break" && breakLength > 1) {
      setBreakLength(breakLength - 1);
      setTimeLeft((breakLength - 1) * 60)
    }
  };

  const handleIncrement = (type) => {
    if (type === "session" && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft((sessionLength + 1) * 60)
    } else if (type === "break" && breakLength < 5) {
      setBreakLength(breakLength + 1);
      setTimeLeft((breakLength + 1) * 60)
    }
  };


  const handleReset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setIsRunning(false);
    setIsSession(true);
  };

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div className="wrapper">
      <h1 id="header">Pomodoro Clock</h1>
      <div className="length-container">
        <div className="break-length">
          <h2 id="break-label">Break length</h2>
          <div className="sub-break-length">
            <button id="break-decrement" onClick={() => handleDecrement("break")}>
              <i className="fa-solid fa-down-long"></i>
            </button>
            <i id="break-length">{breakLength}</i>
            <button id="break-increment" onClick={() => handleIncrement("break")}>
              <i className="fa-solid fa-up-long"></i>
            </button>
          </div>
        </div>
        <div className="session-length">
          <h2 id="session-label">Session length</h2>
          <div className="sub-session-length">
            <button id="session-decrement" onClick={() => handleDecrement("session")}>
              <i className="fa-solid fa-down-long"></i>
            </button>
            <i id="session-length">{sessionLength}</i>
            <button id="session-increment" onClick={() => handleIncrement("session")}>
              <i className="fa-solid fa-up-long"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="timer-container">
        <h3 id="timer-label">{isSession ? 'Session' : 'Break'}</h3>
        <h1 id="time-left">{formatTime(timeLeft)}</h1>
      </div>
      <div className="start-stop-container">
        <button id="start" onClick={() => setIsRunning(!isRunning)}>
          {!isRunning ? 'Start' : 'Stop'}
        </button>
        <button id="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div id="me">
        Designed and Coded by <a href="https://github.com/OB-Adams">OB</a>
      </div>
    </div>
  );
}

export default Clock;
