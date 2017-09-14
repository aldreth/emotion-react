import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'react-emotion'

const H1 = styled('h1')`
  color: blue;
  font-size: 48px;
  transform: scale(${props => props.scale});
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <H1 scale={2}>Hello Fay</H1>
      </div>
    );
  }
}

export default App;
