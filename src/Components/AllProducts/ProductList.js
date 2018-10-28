import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/productAction'
import PriceSorter from '../PriceSorter/PriceSorter';
import Filter from '../Filter/Filter';
import SearchBar from '../Search/Search';
import './ProductList.css';

class ProductList extends React.Component {



  componentWillMount(){
    const {sortBy,searchBy} = this.props
    this.props.fetchProducts(sortBy,searchBy)
  }

  componentDidUpdate(prevProps,prevState) {
    const {sortBy,searchBy} = this.props
    if(this.props.sortBy !== prevProps.sortBy  || this.props.searchBy !== prevProps.searchBy){

    this.props.fetchProducts(sortBy,searchBy)
    }

  }

  render(){
    // console.log('products props',this.props)

    const productList = this.props.products.map((product) =>
      <div className="boxed" key={product.name}>
        <img src={require(`../../images/${product.image}`)}/><br/>
        {product.name}<br/>
        {product.currency} {product.price}<br/>
        <button className="addBasket" value="Add" >Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" >Remove From Cart </button>
      </div>);

  return(

    <div>
      <div className="productsheader">
        <SearchBar/>
        <PriceSorter />
        <h5>Products</h5>

      </div>

      <div className="productsboxed">

        <Filter/>
        {productList}

      </div>
    </div>
      );
      }
}

const mapStateToProps = (state) => ({

  products : state.products.products,
  sortBy   : state.sortBy.sort,
  filterBy : state.filterBy.filterByPrice,
  searchBy : state.searchBy.search

})

export default connect(mapStateToProps,{fetchProducts})(ProductList)
