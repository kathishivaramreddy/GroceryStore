import React from 'react';
import {connect} from 'react-redux';
import PriceSorterContainer from '../../container/PriceSorterContainer';
import {Filter} from '../Filter/Filter';
import {SearchBar} from '../Search/Search';
import './ProductList.css';

export class ProductList extends React.Component {

  render(){

    const {products} = this.props

    const productList = products.map((product) =>
      <div className="boxed" key={product.name}>
        <img src={require(`../../images/${product.image}`)}/><br/>
        {product.name}<br/>
        {product.currency} {product.price}<br/>
        <button className="addBasket" value="Add" onClick={() => this.props.addCartAction(product)}>Add To Cart </button>
        <button className="RemoveBasket" value="Remove From Cart" onClick={() => this.props.removeCartAction(product)}>Remove From Cart </button>
      </div>);

  return(

    <div className="products">

      <div className="productsheader">
        <SearchBar />
        <PriceSorterContainer />
        <h5>Products</h5>
      </div>

      <div className="filter">
        <Filter/>
      </div>

      <div className="productsboxed">
        {productList}
      </div>

    </div>);}
}
