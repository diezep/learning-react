import { Component } from 'react';
import './App.css';
import Clock from './components/Clock.jsx';
import stickColors from './components/StickColors';
import TimeClock from './components/TimeClock.jsx';

const lengthColors = 10;

class App extends Component {


  constructor() {
    super();
    this.state = {
      date: new Date(),
      colors: stickColors(0)
    };

    this.randomNumber = 0
  }

  componentDidMount() {
    this.timer = setInterval(() => {

      this.randomNumber = this.randomNumber === lengthColors ? 0 : this.randomNumber + 1;

      // Get random color from stickColors
      const colors = stickColors(this.randomNumber);

      this.state.date.setSeconds(this.state.date.getSeconds() + 1);
      this.setState({
        date: this.state.date,
        colors: colors,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3> Clock </h3>
        </header>
        <body className="App-body" style={{
          backgroundColor: this.state.colors.background}}>
          <Clock
            time={this.state.date} 
            colors={this.state.colors} />
          <TimeClock 
            time={this.state.date} 
            backgroundColor={this.state.colors.background} />
        </body>
      </div>
    );
  }
}

export default App;
