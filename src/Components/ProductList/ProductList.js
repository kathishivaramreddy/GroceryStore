import React from 'react';
import {connect} from 'react-redux';
import PriceSorterContainer from '../../container/PriceSorterContainer';
import FilterContainer from '../../container/FilterContainer';
import SearchBarContainer from '../../container/SearchBarContainer';
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
        <SearchBarContainer className="searchBar"/>
        <PriceSorterContainer className="priceSorter"/>
        <h5>Products</h5>
      </div>

      <div className="filter">
        <FilterContainer className="filter"/>
      </div>

      <div className="productsboxed">
        {productList}
      </div>

    </div>);}
}
