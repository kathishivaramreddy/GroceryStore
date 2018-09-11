import React from 'react';
import {Navigation} from './Navigation'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* //Todo add logo */}
          <h1 className="App-title" >"Welcome to Grocery Store"</h1>
        </header>
        <Navigation />
      </div>
    );
  }
}

export default App;
