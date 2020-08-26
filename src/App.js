import React from 'react';
import logo from './images.jpeg';
import './App.css';
import Honda from "./Honda"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>

        <a
          className="App-link"
          href="https://automobiles.honda.com/civic-type-r"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About the Type R
        </a>
      </header>
      <Honda />
    </div>
  );
}

export default App;
