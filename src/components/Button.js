import React, { Component } from 'react';
import '../App.css';

class Button extends Component {
  pressedButton =()=>{
    this.props.pressedButton(this.props.text)
  }
  render() {
    return (
        <span className="App">
            <span className={this.props.className} onClick={this.pressedButton}>{this.props.text}</span>
        </span>
          );
  }
}
export default Button;
