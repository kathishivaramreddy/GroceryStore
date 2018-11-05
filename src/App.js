import React from 'react';
import Navigation from './Components/Util/Navigation';
import Routes from './Components/Util/Routes';
import CartContainer from './container/CartContainer';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title" > Grocery Store </h1>
          </header>

          <div>
            <Navigation/>

            <div className="cartComponent">
              <CartContainer />
            </div>

          </div>

        </div>

        <Routes/>

      </div>);}
}

export default App
