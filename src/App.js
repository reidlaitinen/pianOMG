import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <div className="App">
            <h1>pianOMG</h1>
          </div>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
