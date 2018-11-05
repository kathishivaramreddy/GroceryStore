import React from 'react';
import {connect} from 'react-redux';
import PriceSorterContainer from '../../container/PriceSorterContainer';
import FilterContainer from '../../container/FilterContainer';
import SearchBarContainer from '../../container/SearchBarContainer';
import {productDisplay} from '../Util/ProductsDisplay';
import './ProductList.css';

export class ProductList extends React.Component {
  
  render(){

    const {products,addCartAction,removeCartAction} = this.props

    const productList = productDisplay(products,addCartAction,removeCartAction)

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
