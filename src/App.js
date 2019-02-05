import React, { Component } from 'react';
import Keyboard from './components/Keyboard.js';
import {Grid} from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <div className="App">
            <h1>pianOMG</h1>
          </div>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>

          </Grid.Column>
          <Grid.Column>
            <Keyboard />
          </Grid.Column>
          <Grid.Column>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
