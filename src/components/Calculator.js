import React, { Component } from 'react';
import Screen from './Screen'
import Buttons from './Buttons'
import '../App.css';
import { inject } from 'mobx-react';
import Clear from './Clear'
import Draggable from 'react-draggable';
@inject("store")
class Calculator extends Component {
    render() {
        return (
            <body>
                <Draggable>
                    <div className='box'>
                        <div className="calc-border">
                            <Screen />
                            <Buttons />
                        </div>
                    </div>
                </Draggable>
                <Clear/>
            </body>
        );
    }
}

export default Calculator;
