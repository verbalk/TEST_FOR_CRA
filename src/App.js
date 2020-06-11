import React from 'react';
import logo from './logo.svg';
import './App.css';
import './home.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className=""
          href="./home.js"
          target="_blank"
          rel=""
        >
          Click
        </a>
      </header>
    </div>
  );
}

export default App;
