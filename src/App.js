import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-intro">
            <img src={logo} className="App-logo" alt="logo" />
        </div>

      </div>
    );
  }
}

export default App;
