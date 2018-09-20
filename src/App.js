import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {ProductList} from './ProductList';
import {Fruits} from './Fruits';
import {Cart} from './Cart';
import {Vegetables} from './Vegetables';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { cart : [] }
    this.handleAddToCart.bind(this);
    console.log("coming 1")
  }

  handleAddToCart(name){

      this.setState({cart:this.state.cart.concat([name])})

    }


  render() {
    return (
      <div>
        <div className="App">

          <header className="App-header">
            <h1 className="App-title" >Welcome to Grocery Store</h1>
          </header>

          <BrowserRouter>
            <div>
              <hr/>
              <div className="dropdown">
                <button className="dropbtn">Home</button>
                <div className="dropdown-content">
                  <Link to='/'>All Products</Link>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">Vegetables</button>
                <div className="dropdown-content">
                  <Link to='/fruits'>Fruits</Link>
                  <Link to='organic'>Organic Vegetables</Link>
                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">Dairy</button>
                <div className="dropdown-content">
                  <Link to='/milk'>Milk</Link>
                  <Link to='meat'>Meat</Link>

                </div>
              </div>

              <div className="dropdown">
                <button className="dropbtn">Beverages</button>
                <div className="dropdown-content">
                  <Link to='tea'>Tea</Link>
                  <Link to='coffee'>Coffee</Link>
                </div>
              </div>
              <Route exact path='/' component={() => <ProductList onClick={this.handleAddToCart.bind(this)} />}/>
              <Route path='/fruits' component={() => <Fruits onClick={this.handleAddToCart.bind(this)}  />}/>
              <Route path='/organic' component={() => <Vegetables onClick={this.handleAddToCart.bind(this)}  />}/>

            </div>
          </BrowserRouter>

          <hr/>
        </div>

        <div className="cartboxed">
          <Cart data={this.state.cart}/>
        </div>
      </div>
    );
  }
}

export default App;
