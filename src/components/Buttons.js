import React, { Component } from 'react';
import Number from './Number'
import Operator from './Operator'
import Clear from './Clear'
import '../App.css';

class Buttons extends Component {
  render() {
    return (
        <span className="App">
            <span>
                <Number/>
                <Operator/>
                <Clear/>
            </span>
        </span>
          );
  }
}
export default Buttons;
