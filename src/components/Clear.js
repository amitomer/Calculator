import React, { Component } from 'react';
import Button from './Button'
import '../App.css';
import {observer, inject} from 'mobx-react';

@inject("store")
@observer
class Clear extends Component {
  
    
    render() {
    return (
        <span className="App">
            <span>
                <Button key="C" text="Clear My Calculator Please!" pressedButton={this.props.store.clear} className="clear"/>
            </span>
        </span>
    );
  }
}
export default Clear;
