import React, { Component } from 'react';
import Keyboard from './components/Keyboard.js';
import {Grid} from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>pianOMG</h1>
        <Keyboard />
      </div>
          
    );
  }
}

export default App;
