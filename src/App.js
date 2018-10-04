import React from 'react';
import {Route,Link} from 'react-router-dom';
import isNil from 'lodash/isNil';
import merge from 'lodash/merge';
import concat from 'lodash/concat';

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
       filterPrice : [] ,
       filterCategory: []
     };
    this.handleAddToCart=this.handleAddToCart.bind(this);
    this.handleRemoveFromCart=this.handleRemoveFromCart.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleCheckBox =this.handleCheckBox.bind(this);
    this.handleClearCart = this.handleClearCart.bind(this);
    this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
    console.log('filterPrice',this.state.filterPrice,'filterCategory',this.state.filterCategory)
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
    console.log('filterPrice HANDLEpRICE',this.state.filterPrice,'filterCategory',this.state.filterCategory)
      }
    else{
      const reducedFilterSearch = removeFromFilter(this.state.filterPrice,filterValue);
      this.setState({filterPrice: reducedFilterSearch})
      console.log('filterPrice HANDLEpRICE',this.state.filterPrice,'filterCategory',this.state.filterCategory)
      }
  }
  handleCategoryFilter(e){
    var filterValueCategory = setCategoryValue(e.target.name)
    if(e.target.checked){
    const newFilterCategory = addToFilterCategory(this.state.filterCategory,filterValueCategory);
    this.setState({filterCategory: newFilterCategory})
    console.log('filterPrice HANDLEcATEGORY',this.state.filterPrice,'filterCategory',this.state.filterCategory)
      }
    else{
      const reducedFilterCategory = removeFromFilterCategory(this.state.filterCategory,filterValueCategory);
      this.setState({filterCategory: reducedFilterCategory})
      console.log('filterPrice HANDLEcATEGORY',this.state.filterPrice,'filterCategory',this.state.filterCategory)
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
        <div className="filterboxed">
          <h3>Filter here</h3>
          <hr/>
          <div className="boxed">

            <h4>Price Filter</h4>
            <input type="checkbox" name="price1"  onChange={this.handleCheckBox} /> Less Than 100 <br/>
            <input type="checkbox" name="price2"  onChange={this.handleCheckBox} /> 101-200<br/>
            <input type="checkbox" name="price3"  onChange={this.handleCheckBox} /> 201-1000<br/>
          </div>
          <br/>
          <div className="boxed">

            <h4>Category Filter</h4>
            <input type="checkbox" name="fruits"  onChange={this.handleCategoryFilter} /> Fruits <br/>
            <input type="checkbox" name="tea"  onChange={this.handleCategoryFilter} /> Tea<br/>
            <input type="checkbox" name="milk"  onChange={this.handleCategoryFilter} /> Milk<br/>
          </div>

        </div>);
    }
  }





  render() {
    return (
      <div>
        <div className="App">

          <header className="App-header">
            <h1 className="App-title" >Welcome to Grocery Store</h1>
          </header>


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

            <div className="dropdown">
              <input className="searchbox" type="search"  placeholder="Search Here.." name="search" onChange={this.updateInput}/>

            </div>

            <div className="login">
              <Link to='login'><button className="dropbtn">Login</button></Link>
            </div>

            <br/>

            {this.renderFilterBox(window.location.pathname)}



            <div>

              <Route path='/fruits' component={() => <Fruits onClick={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)}  />}/>
              <Route path='/organic' component={() => <Vegetables onClick={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)}  />}/>
              <Route path='/milk' component={() => <Milk onClick={this.handleAddToCart.bind(this)}  onRemove={this.handleRemoveFromCart.bind(this)} />}/>
              <Route path='/meat' component={() => <Meat onClick={this.handleAddToCart.bind(this)}  onRemove={this.handleRemoveFromCart.bind(this)} />}/>
              <Route path='/tea' component={() => <Tea onClick={this.handleAddToCart.bind(this)}  onRemove={this.handleRemoveFromCart.bind(this)} />}/>
              <Route path='/coffee' component={() => <Coffee onClick={this.handleAddToCart.bind(this) }   onRemove={this.handleRemoveFromCart.bind(this)} />}/>
              <Route exact path='/checkout' component={() => <Checkout totalPrice={this.state.cart} />}/>
              <Route exact path='/login' component={() => <Login authentication={this.state.authentication}/>}/>
              <Route exact path='/' component={() => <ProductList onClick={this.handleAddToCart.bind(this)} onRemove={this.handleRemoveFromCart.bind(this)} onSearch={this.state.input} onPriceFilter={this.state.filterPrice} categoryFilter={this.state.filterCategory}/>}/>

            </div>
          </div>


        </div>
        {this.renderCart(window.location.pathname)}


      </div>
    );
  }
}

export default App;
// search and filter at same time.
