import React, { Component } from 'react';
import Button from './Button'
import '../App.css';
import {observer, inject} from 'mobx-react';

@inject("store")
@observer
class Operator extends Component {
    operators=["+","-","*","/","="];
    
    generateButtonOperators =()=>{
        let operators=this.operators;
        return operators.map(o=> {
            return (<Button
                 key={o}
                 pressedButton={this.props.store.changeOperator}
                 text={o}
                 className="opButton"/>)
        })
    }
    render() {
    return (
    
        <span className="App">
            <span className="operators">
                {this.generateButtonOperators()}
            </span>
        </span>
      
    );
  }
}
export default Operator;
