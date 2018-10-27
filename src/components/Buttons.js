import React, { Component } from 'react';
import Number from './Number'
import Operator from './Operator'
import '../App.css';

class Buttons extends Component {
  render() {
    return (
        <span className="App">
            <span>
                <Number/>
                <Operator/>
                
            </span>
        </span>
          );
  }
}
export default Buttons;
