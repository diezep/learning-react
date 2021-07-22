
import React, { Component } from "react";

class TimeClock extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      time: props.time,
      backgroundColor: props.backgroundColor
    };
  }

  render() {
    return (
      <div>
        <h1 style={{
          color: this.state.backgroundColor,
          mixBlendMode: "difference",
        }}>
          {this.state.time.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}

export default TimeClock;