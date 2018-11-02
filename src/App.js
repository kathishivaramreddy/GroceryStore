import React from 'react';
import {Route} from 'react-router-dom';
import {navigation} from './Components/Util/Navigation';
import ProductListContainer from './container/ProductListContainer';
import Fruits from './Components/Fruits/Fruits';
import {Vegetables} from './Components/Vegetables/Vegetables';
import {Milk} from './Components/Milk/Milk';
import {Meat} from './Components/Meat/Meat';
import {Tea} from './Components/Tea/Tea';
import {Coffee} from './Components/Coffee/Coffee';
import CartContainer from './container/CartContainer';
import {concatCart,removeFromCart} from './Components/Cart/CartUtil.js'
import './App.css';

class App extends React.Component {

  renderCart() {
      return (<div className="cartboxed">
        <CartContainer />
      </div>);

  }

  render() {
    return (
      <div>
        <div className="App">

          <header className="App-header">
            <h1 className="App-title" > Grocery Store </h1>
          </header>

          <div>
            {navigation()}
            <div className="cartComponent">
              {this.renderCart()}
            </div>
          </div>{/* Navigation */}

        </div>

        <div className="route">

          <Route exact path='/' component={ProductListContainer} />
          <Route path='/fruits' component={Fruits }/>
          <Route path='/organic' component={Vegetables}/>
          <Route path='/milk' component={Milk}/>
          <Route path='/meat' component={Meat}/>
          <Route path='/tea' component={Tea}/>
          <Route path='/coffee' component={Coffee }/>
          <Route exact path='/cart' component={CartContainer} />

        </div>

      </div>);}
}

export default App
