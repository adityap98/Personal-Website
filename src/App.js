import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <h1 className="App-title">Welcome to Aditya's Website</h1>
        </header>
        <p className="App-intro">
        </p>
        <div className="Button">
          <button bsSize="large">
            We did it 
          </button>
        </div>
      </div>
    );
  }
}