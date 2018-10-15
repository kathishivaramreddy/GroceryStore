import React from 'react';
import {Route} from 'react-router-dom';
import {navigation} from '../Util/Navigation';
import {ProductList} from '../AllProducts/ProductList';
import {Fruits} from '../Fruits/Fruits';
import {Vegetables} from '../Vegetables/Vegetables';
import {Milk} from '../Milk/Milk';
import {Meat} from '../Meat/Meat';
import {Tea} from '../Tea/Tea';
import {Coffee} from '../Coffee/Coffee';
import {Cart} from '../Cart/Cart';
import {concatCart,removefromCart} from '../Cart/CartUtil.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      input:'',
    };
    this.handleAddToCart=this.handleAddToCart.bind(this);
    this.handleRemoveFromCart=this.handleRemoveFromCart.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);// shift to cart
    console.log('app',this.props)
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


          <div>

            {navigation()}

            <div className="searchbar">
              <input className="searchbox" type="search" placeholder="Search for products and more" name="search" onChange={this.updateInput} autoComplete="off"/>
            </div>

            <div className="cartComponent">
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
          {/* <Route exact path='/checkout' component={}/> */}
          <Route exact path='/cart' component={Cart} />


        </div>


      </div>
    );
  }
}

export default App;
// search and filter at same time.