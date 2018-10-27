import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator'
import {observer, inject} from 'mobx-react';

@inject("store")
class App extends Component {
  render() {
    return (
      
      <div className="App">
      <h1>My Calculator:</h1>
        <Calculator />
        
      </div>
      
    );
  }
}

export default App;
