// src/TrafficSignal.jsx

import React from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import MyContext from './MyContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  return (
    <MyContext.Consumer>
      {(value) => (
      <div>
        <div className="button-container">
          <button onClick={() => value.changeSignal('red')} type="button">
            Red
          </button>
          <button onClick={() => value.changeSignal('yellow')} type="button">
            Yellow
          </button>
          <button onClick={() => value.changeSignal('green')} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={renderSignal(value.signalColor)} alt="" />
      </div>
      )}
    </MyContext.Consumer>
  );
};

export default TrafficSignal;
