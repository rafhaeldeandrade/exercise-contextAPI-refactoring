import React, { Component } from 'react';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import './App.css';
import MyContext from './MyContext';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signalColor: 'red',
    }
  }

  moveCar = (color, side) => {
    this.setState({ cars: {...this.state.cars, [color]: side }});
  }

  changeSignal = (color) => {
    this.setState({ signalColor: color });
  }

  render() {
    const { cars: { red, blue, yellow }, signalColor } = this.state;
    const contextValue = {
      cars: {
        red,
        blue,
        yellow
      },
      signalColor,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }
    return (
      <MyContext.Provider value={ contextValue }>
        <div>
          <Cars />
          <TrafficSignal />
        </div>
      </MyContext.Provider>
    )
  }
}

export default App;
