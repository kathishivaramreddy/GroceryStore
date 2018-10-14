import React from 'react';
import {Route, Link} from 'react-router-dom';
// import {Filter} from './Filter';
import {ProductList} from './ProductList';
import {Fruits} from './Fruits';
import {Cart} from './Cart';
import {Vegetables} from './Vegetables';
import {Milk} from './Milk';
import {Meat} from './Meat';
import {Tea} from './Tea';
import {Coffee} from './Coffee';
import {Checkout} from './Checkout';
import {Login} from './Login';
import {concatCart,removefromCart} from './CartUtil.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      input: '',
    };
    this.handleAddToCart=this.handleAddToCart.bind(this);
    this.handleRemoveFromCart=this.handleRemoveFromCart.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);// shift to cart
  }

  handleAddToCart(name, currency, price, image) {
    console.log('in add cart');
    const cartItem = {name, currency, price, image, quantity: 1};
    const updatedCart = concatCart(this.state.cart, cartItem);
    this.setState({cart: updatedCart});
  }

  handleRemoveFromCart(name, currency, price) {
    const cartItem = {name, currency, price, quantity: 1};
    const updatedCart = removefromCart(this.state.cart, cartItem);
    this.setState({cart: updatedCart});
  }

  handleClearCart() {
    this.setState({cart: []});
    console.log('handleclearcart', this.state.cart);
  }

  updateInput(e) {
    const value = e.target.value;
    this.setState({input: value});
  }

  renderCart() {
      return (<div className="cartboxed">
        <Cart data={this.state.cart} clearCart={this.handleClearCart}/>
      </div>);

  }

  render() {
    return (
      <div>
        <div className="App">

          <header className="App-header">
            <h1 className="App-title" > Grocery Store</h1>
          </header>


          <div className="Navigation">
            <div className="navdown">
              <button className="navbtn">Home</button>
              <div className="navdown-content">
                <Link to='/'>All Products</Link>
              </div>
            </div>

            <div className="navdown">
              <button className="navbtn">Vegetables</button>
              <div className="navdown-content">
                <Link to='/fruits'>Fruits</Link>
                <Link to='organic'>Organic Vegetables</Link>
              </div>
            </div>

            <div className="navdown">
              <button className="navbtn">Dairy</button>
              <div className="navdown-content">
                <Link to='/milk'>Milk</Link>
                <Link to='meat'>Meat</Link>

              </div>
            </div>

            <div className="navdown">
              <button className="navbtn">Beverages</button>
              <div className="navdown-content">
                <Link to='tea'>Tea</Link>
                <Link to='coffee'>Coffee</Link>
              </div>
            </div>

            <div className="searchbar">
              <input className="searchbox" type="search" placeholder="Search for products and more" name="search" onChange={this.updateInput} autoComplete="off"/>
            </div>

            <div className="login">
              {this.renderCart()}
            </div>
          </div>{/* Navigation */}

        </div>

        <div className="route">

          <Route exact path='/' component={ () => <ProductList onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch={this.state.input}/>} />
          {/* onPriceFilter={this.state.filterPrice} categoryFilter={this.state.filterCategory} */}
          <Route path='/fruits' component={() => <Fruits onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch={this.state.input}/>}/>

          <Route path='/organic' component={() => <Vegetables onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch={this.state.input} />}/>
          <Route path='/milk' component={() => <Milk onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch={this.state.input} />}/>
          <Route path='/meat' component={() => <Meat onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch={this.state.input}/>}/>
          <Route path='/tea' component={() => <Tea onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch={this.state.input}/>}/>
          <Route path='/coffee' component={() => <Coffee onAdd={this.handleAddToCart.bind(this) } onRemove={this.handleRemoveFromCart.bind(this)} onSearch={this.state.input} />}/>
          <Route exact path='/checkout' component={() => <Checkout totalPrice={this.state.cart} />}/>
          <Route exact path='/cart' component={Cart} />


        </div>


      </div>
    );
  }
}

export default App;
// search and filter at same time.
