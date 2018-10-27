import React, { Component } from 'react';

import '../App.css';
import {observer, inject} from 'mobx-react';

@inject("store")
@observer
class Screen extends Component {
  render() {
    return (
        <div className="App">
            <div className="screen">
                 {this.props.store.displayValue} 
            </div>
        </div>
          );
  }
}
export default Screen;
