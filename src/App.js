import React from 'react';
import {Route,Link} from 'react-router-dom';
import isNil from 'lodash/isNil';
import merge from 'lodash/merge';
import concat from 'lodash/concat';

import {Filter} from './Filter';
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
import './App.css';

const mergeProduct = (item, newItem) => {
  return merge(item, {quantity: item.quantity + newItem.quantity});
};

const updateItems = (items, newItem) => {
    return items.map((item) => {
      return (item.name === newItem.name) ? mergeProduct(item, newItem) : item;
    });
};

const concatCart = (items, newItem) => {
  const itemToBeUpdated = items.find((item) => { return item.name === newItem.name; });
  return isNil(itemToBeUpdated) ? concat(items, newItem) : updateItems(items, newItem);
};

const updateDecreasedQuantity = (item, newItem) => {
  return merge(item, {quantity: item.quantity - newItem.quantity});
};

const decreaseQuantity = (items, newItem) => {
    return items.map( (item) => {
      return (item.name === newItem.name  ) ? updateDecreasedQuantity(item,newItem) : item;
    });
};
const removeItemFromCart = (items,itemToBeDeleted) => {

    return items.filter( (item) =>  item.name !== itemToBeDeleted.name)

}
const removefromCart = (items,newItem) => {

  const itemQuantityToBeUpdated = items.find( (item) => { return item.name === newItem.name && item.quantity > 1});
  const itemToBeDeleted = items.find( (item) => { return item.name === newItem.name && item.quantity === 1});

  if(itemQuantityToBeUpdated){
      return decreaseQuantity(items,newItem)
  }
  else if(itemToBeDeleted){
    return removeItemFromCart(items,itemToBeDeleted)
  }
  else{
    return items;
    }
}

const addToFilter = (items,value) => {

  return concat(items,value)

}
const addToFilterCategory = (items,value) => {

  return concat(items,value)

}

const removeFromFilter = (items,value) =>{
  return items.filter(item => item.min !== value.min && item.max !== value.max)
}

const removeFromFilterCategory = (items,value) =>{
  return items.filter(item => item.category !== value.category)
}

const setFilterValue = (name) => {
  const checkboxData = {price1:{min:1,max:100},price2:{min:101,max:200},price3:{min:201,max:1000}}

  if(name === 'price1'){
    return checkboxData.price1;
  }
  else if (name ==='price2') {
    return checkboxData.price2;
  }
  else {
    return checkboxData.price3;
    }
}

const setCategoryValue = (name) => {
  const checkboxData = {category:name}
    return checkboxData;
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       cart : [],
       input : '' ,
       filterPrice : [],
       filterCategory: []
          };
    this.handleAddToCart=this.handleAddToCart.bind(this);
    this.handleRemoveFromCart=this.handleRemoveFromCart.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleCheckBox =this.handleCheckBox.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);
    this.handleCategoryFilter = this.handleCategoryFilter.bind(this);

  }

  handleAddToCart(name,currency,price,image) {
    const cartItem = {name, currency, price,image,quantity: 1};
    const updatedCart = concatCart(this.state.cart, cartItem);
    this.setState({ cart: updatedCart});
  }

  handleRemoveFromCart(name,currency,price){

    const cartItem = {name, currency, price, quantity: 1};
    const updatedCart = removefromCart(this.state.cart, cartItem);
    this.setState({cart : updatedCart })
  }

  handleClearCart(){
    this.setState({cart : []})
    console.log('handleclearcart',this.state.cart)
  }

  updateInput(e){
    const value = e.target.value;
    this.setState({input: value })
  }

  handleCheckBox(e){
    var filterValue = setFilterValue(e.target.name)
    if(e.target.checked){
    const newFilterSearch = addToFilter(this.state.filterPrice,filterValue);
    this.setState({filterPrice: newFilterSearch})
    }
    else{
      const reducedFilterSearch = removeFromFilter(this.state.filterPrice,filterValue);
      this.setState({filterPrice: reducedFilterSearch})

      }
  }
  handleCategoryFilter(e){
    var filterValueCategory = setCategoryValue(e.target.name)
    if(e.target.checked){
    const newFilterCategory = addToFilterCategory(this.state.filterCategory,filterValueCategory);
    this.setState({filterCategory: newFilterCategory})

      }
    else{
      const reducedFilterCategory = removeFromFilterCategory(this.state.filterCategory,filterValueCategory);
      this.setState({filterCategory: reducedFilterCategory})
      }
  }

  renderCart(path){
    if (path !== '/login' && path !=='/checkout'){
    return(<div className="cartboxed">
      <Cart data={this.state.cart}  clearCart={this.handleClearCart}/>

    </div>)}
    console.log('render cart'.this.state.cart)
  }

  renderFilterBox(path){
    if(path !== '/login' && path !=='/checkout')
    {
      return(
        <Filter />
        );
    }
  }





  render() {
    return (
      <div>
        <div className="App">

          <header className="App-header">
            <h1 className="App-title" > Grocery Store</h1>
          </header>


          <div className="Navigation">
            <hr/>
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
              <input className="searchbox" type="search"  placeholder="Search for products and more" name="search" onChange={this.updateInput} autoComplete="off"/>

            </div>

            <div className="login">
              {this.renderCart(window.location.pathname)}
            </div>

            <div>

              <Route exact path='/' component={() => <ProductList onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch={this.state.input}/>} />
              {/* onPriceFilter={this.state.filterPrice} categoryFilter={this.state.filterCategory} */}
              <Route path='/fruits' component={() => <Fruits onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)}  />}/>

              <Route path='/organic' component={() => <Vegetables onAdd={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)}  />}/>
              <Route path='/milk' component={() => <Milk onAdd={this.handleAddToCart.bind(this)}  onRemove={this.handleRemoveFromCart.bind(this)} />}/>
              <Route path='/meat' component={() => <Meat onAdd={this.handleAddToCart.bind(this)}  onRemove={this.handleRemoveFromCart.bind(this)} />}/>
              <Route path='/tea' component={() => <Tea onAdd={this.handleAddToCart.bind(this)}  onRemove={this.handleRemoveFromCart.bind(this)} />}/>
              <Route path='/coffee' component={() => <Coffee onAdd={this.handleAddToCart.bind(this) }   onRemove={this.handleRemoveFromCart.bind(this)} />}/>
              <Route exact path='/checkout' component={() => <Checkout totalPrice={this.state.cart} />}/>
              <Route exact path='/cart' component={Cart} />


            </div>
          </div>


        </div>



      </div>
    );
  }
}

export default App;
// search and filter at same time.
