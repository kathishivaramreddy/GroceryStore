import React from 'react';
import some from 'lodash/some';
import sortBy from 'lodash/sortBy'

import allProductsList from './AllProducts'
import './App.css';
import './ProductList.css'



export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      products: [],
    };
    this.handleSelectChange=this.handleSelectChange.bind(this);
  }

  componentDidMount(){
    const productList = allProductsList();
    this.setState({products :  productList.products})
  }
  handleSelectChange(e){
    console.log('cart state before select-option',this.state.cart)
    var value = e.target.value
    let sortedState = sortBy(this.state.products,function(product){ return product.price })
    value ==='low' ? this.setState({products : sortedState}) : this.setState({products : sortedState.reverse()})

    console.log('value of select box',e.target.value,this.state.cart)
  }

  render() {

    const listItems = this.state.products.map((data) =>
      <div className="boxed" key={data.name}>
        <img src={data.image} alt=''/><br/>
        {data.name}<br/>
        {data.currency} {data.price}<br/>
        <button className="addBasket" value="Add" onClick={ () => this.props.onClick(data.name, data.currency, data.price,data.image)}>Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(data.name,data.currency,data.price)}>Remove From Cart </button>
      </div>);

    const searchItems = this.state.products.filter((data) => data.name.toUpperCase() === this.props.onSearch.toUpperCase()).map((data) =>
      <div className="boxed" key={data.name}>
        <img src={data.image} alt=''/><br/>
        {data.name}<br/>
        {data.currency} {data.price}<br/>
        <button className="addBasket" value="Add" onClick={ () => this.props.onClick(data.name, data.currency, data.price,data.image)}>Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(data.name)}>Remove From Cart </button>
      </div>);



      const filterItems = this.state.products.filter( (product) =>  some(this.props.onFilter,function(filterToCheck){
            if(product.price > filterToCheck.min && product.price < filterToCheck.max){return true}}))
            .map((product) =>
            <div className="boxed" key={product.name}>
              <img src={product.image} alt=''/><br/>
              {product.name}<br/>
              {product.currency} {product.price}<br/>
              <button className="addBasket" value="Add" onClick={ () => this.props.onClick(product.name,product.currency,product.price,product.image)}>
              Add To Cart </button>
              <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(product.name)}>
              Remove From Cart </button>
            </div>);
      return (
      <div >

        <div className="productboxed">
          <div className ="productheader">

            <h5 className="position" >All Products</h5>
            <select className="position" onClick={this.handleSelectChange}>
              <option value="low" > Price-Low to High</option>
              <option value="high" > Price-High to Low</option>
            </select>

          </div>
          <br/>
          {searchItems.length === 0 && filterItems.length === 0 ? listItems
          : searchItems.length === 0 ? filterItems : searchItems}
        </div>

      </div>
    );
  }
}
