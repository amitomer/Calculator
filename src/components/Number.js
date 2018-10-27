import React, { Component } from 'react';
import Button from './Button'
import '../App.css';
import {observer, inject} from 'mobx-react';

@inject("store")
@observer
class Number extends Component {
  
      numbers= [8,9,6,7,4,5,2,3,0,1];
      addNumber=(n)=>{
        this.props.store.addNumber(n);
      }
      generateButtonTags=()=>{
       return this.numbers.map(n=>{
            return(<Button
                key={n}
                text={n}
                pressedButton={this.addNumber}
                className="numButton"
            />)
        })
      }
    render() {
    return (
        <span className="App">
            <span>
                {this.generateButtonTags()}
            </span>
        </span>
    );
  }
}
export default Number;
