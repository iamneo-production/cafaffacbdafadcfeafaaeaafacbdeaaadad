import React, { Component } from 'react';
import './App.css';

function App() {

  class Stopwatch extends Component {
    constructor() {
      super();
      this.state = {
        isRunning: false,
        time: 0,
        laps: [],
      };
      this.startTime = 0;
    }
  
    startStopwatch = () => {
      if (!this.state.isRunning) {
        this.setState({ isRunning: true }, () => {
          this.startTime = Date.now() - this.state.time;
          this.tick();
        });
      }
    };
  
    stopStopwatch = () => {
      if (this.state.isRunning) {
        this.setState({ isRunning: false });
      }
    };
  
    resetStopwatch = () => {
      this.setState({
        isRunning: false,
        time: 0,
        laps: [],
      });
    };
  
    addLap = () => {
      if (this.state.isRunning) {
        const newLapTime = this.state.time;
        this.setState((prevState) => ({
          laps: [...prevState.laps, newLapTime],
        }));
      }
    };
  
    tick = () => {
      if (this.state.isRunning) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - this.startTime;
        this.setState({ time: elapsedTime });
        requestAnimationFrame(this.tick);
      }
    };
    render(){
  return (
    <div className="App">
              <div>
          <h1>Stopwatch</h1>
          <div>Time: {this.state.time} milliseconds</div>
          <button onClick={this.startStopwatch}>Start</button>
          <button onClick={this.stopStopwatch}>Stop</button>
          <button onClick={this.resetStopwatch}>Reset</button>
          <button onClick={this.addLap}>Add Lap</button>
        </div>
        <div>
          <h2>Lap Times</h2>
          <ul>
            {this.state.laps.map((lapTime, index) => (
              <li key={index}>Lap {index + 1}: {lapTime} milliseconds</li>
            ))}
          </ul>
        </div>
    </div>
  );
}}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch />
      </div>
    );
  }
}
export default App;
