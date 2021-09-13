import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }
  }

  moveCar = (color, side) => {
    this.setState({
      cars: { ...this.state.cars, [color]: side }
    });
  }

  render() {
    const { cars: { red, blue, yellow } } = this.state;
    const contextValue = {
      cars: {
        red,
        blue,
        yellow,
      },
      moveCar: this.moveCar,
    }
    return (
      <MyContext.Provider value={ contextValue } >
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
