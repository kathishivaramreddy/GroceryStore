import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {ProductList} from './ProductList';
import {Fruits} from './Fruits';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
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
                <Route exact path='/' component ={ProductList}/>
                <Route path='/fruits' component={Fruits}/>

              </div>
            </BrowserRouter>
            <hr/>
        </div>

      // </BrowserRouter>
    );
  }
}

export default App;
