import React, { Component } from 'react';
import Router from './router/router';

class App extends Component {
  componentWillMount() {
    // console.log(Component)
  }
  render() {
    return (
      <div className="App">
        <Router></Router>
      </div>
    );
  }
}

export default App;
