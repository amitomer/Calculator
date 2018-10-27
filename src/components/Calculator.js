import React, { Component } from 'react';
import Screen from './Screen'
import Buttons from './Buttons'
import '../App.css';
import {observer, inject} from 'mobx-react';

@inject("store")
class Calculator extends Component {
  render() {
    return (
        <body>
        
        
            <div className='box'>
            <div className="calc-border">
                <Screen />
                <Buttons />
            </div>
            </div>
        
        </body>
    );
  }
}

export default Calculator;
