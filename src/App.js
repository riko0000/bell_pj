import React, { Component } from 'react';
import './App.css';
import Bell from './Bell.js';

class App extends Component {
  renderCircle(x,y){
    return <Bell x={x} y={y} />
  }
  render() {
    return (
      <div className="App">
        <svg>
          {this.renderCircle(260,280)}
          {this.renderCircle(400,320)}
          {this.renderCircle(180,450)}
          {this.renderCircle(300,480)}
          {this.renderCircle(430,480)}
          {this.renderCircle(150,630)}
          {this.renderCircle(310,620)}
          {this.renderCircle(480,620)}
        </svg>
      </div>
    );
  }
}

export default App;
