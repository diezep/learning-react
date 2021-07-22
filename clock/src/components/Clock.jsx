import React, { Component } from 'react';
import './Clock.css'
import stickColors from './StickColors';

class Clock extends Component {

  componentWillReceiveProps(nextProps) {

    const colors = nextProps.colors;

    this.setState({
      // Time
      seconds: nextProps.time.getSeconds(),
      minutes: nextProps.time.getMinutes(),
      hours: nextProps.time.getHours(),

      // Style
      secondsColor: colors.seconds,
      minutesColor: colors.minutes,
      hoursColor: colors.hours,
      clockColor: colors.clockBackground,
      backgroundColor: colors.background,
    });
  }

  constructor(props) {
    super(props);

    const colors = stickColors(0);

    this.state = {
      // Time
      seconds: props.time.getSeconds(),
      minutes: props.time.getMinutes(),
      hours: props.time.getHours(),

      // Style
      secondsColor: colors.seconds,
      minutesColor: colors.minutes,
      hoursColor: colors.hours,
      clockColor: colors.clockBackground,
      backgroundColor: colors.background,
    };
  }

  render() {
    return (
      <div className="clock" style={{
        backgroundColor: this.state.clockColor,
      }}>
        <div className="stick seconds-stick" style={{
          transform: `rotate(${this.state.seconds * 6}deg) translate(0, -50%)`,
          backgroundColor: this.state.secondsColor
        }}></div>
        <div className="stick minutes-stick" style={{
          transform: `rotate(${this.state.minutes * 6}deg) translate(0, -50%)`,
          backgroundColor: this.state.minutesColor
        }}></div>
        <div className="stick hours-stick" style={{
          transform: `rotate(${this.state.hours * 15}deg) translate(0, -50%)`,
          backgroundColor: this.state.hoursColor
        }}></div>
        <div style={{
          width: 10,
          height: 10,
          borderRadius: 100,
          backgroundColor: this.state.backgroundColor,
          zIndex: 1,
        }}></div>
      </div>
    );
  }
}

export default Clock;