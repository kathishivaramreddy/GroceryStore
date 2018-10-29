import React from 'react';
import {Route} from 'react-router-dom';
import {navigation} from './Components/Util/Navigation';
import ProductList from './Components/AllProducts/ProductList';
import {Fruits} from './Components/Fruits/Fruits';
import {Vegetables} from './Components/Vegetables/Vegetables';
import {Milk} from './Components/Milk/Milk';
import {Meat} from './Components/Meat/Meat';
import {Tea} from './Components/Tea/Tea';
import {Coffee} from './Components/Coffee/Coffee';
import Cart from './Components/Cart/Cart';
import {concatCart,removefromCart} from './Components/Cart/CartUtil.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   cart: [],
    //   input:'',
    // };
    this.handleAddToCart=this.handleAddToCart.bind(this);
    this.handleRemoveFromCart=this.handleRemoveFromCart.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);// shift to cart
  }

  handleAddToCart(name, currency, price, image) {
    console.log('in add cart');
    const cartItem = {name, currency, price, image, quantity: 1};
    const updatedCart = concatCart([], cartItem);
    // this.setState({cart: updatedCart});
  }

  handleRemoveFromCart(name, currency, price) {
    const cartItem = {name, currency, price, quantity: 1};
    const updatedCart = removefromCart([], cartItem);
    // this.setState({cart: updatedCart});
  }

  handleClearCart() {
    // this.setState({cart: []});
  }

  updateInput(e) {
    const value = e.target.value;
    // this.setState({input: value});
  }

  renderCart() {
      return (<div className="cartboxed">
        <Cart data={[]} clearCart={this.handleClearCart}/>
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

          <Route exact path='/' component={ProductList} />

          <Route path='/fruits' component={() => <Fruits onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch=""/>}/>

          <Route path='/organic' component={() => <Vegetables onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch="" />}/>
          <Route path='/milk' component={() => <Milk onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch="" />}/>
          <Route path='/meat' component={() => <Meat onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch=""/>}/>
          <Route path='/tea' component={() => <Tea onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch=""/>}/>
          <Route path='/coffee' component={() => <Coffee onAdd={this.handleAddToCart.bind(this) } onRemove={this.handleRemoveFromCart.bind(this)} onSearch="" />}/>
          <Route exact path='/cart' component={Cart} />


        </div>

      </div>
    );
  }
}

export default App
