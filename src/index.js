import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState} from "react"
import "./styles.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const options = [10, 20, 30, 40, 50];

const SetlectReset = (props) => {
  
  return (
    <div style={{ display: "flex" }}>
      <select value={props.timer} 
      onChange={props.timerHandler}>
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt + " sec"}
          </option>
        ))}
      </select>
      <button type="submit" onClick={props.resetHandler}>Reset</button>
    </div>
  );
};

function App() {
  const [timer,setTimer]=useState(10);
  const [reset,setReset]=useState(10);
  const onClickReset = () => {};

  const timerHandler=(event)=>{
    setTimer(event.target.value);
  console.log(timer)    
  }
  const resetHandler=()=>{
    setReset(timer);
    console.log(reset);
  }
  return (
    <div className="App">
      <h1>
        <a
          href="https://www.reactlabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Labs
        </a>
        <br />
        ReactJS Assignment
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          key={reset}
          duration={reset}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={(time)=>{
            console.log("hello");
            return[true, 1]}
        }
       >
          {renderTime}
        </CountdownCircleTimer>
        <SetlectReset timer={timer} timerHandler={timerHandler} resetHandler={resetHandler} />
        <h3>Can you get this reset button to work?</h3>
        <h4>
          The reset button should reset as per the time selected in the dropdown
        </h4>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
         