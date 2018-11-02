import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/productAction';
import {addCartAction,removeCartAction} from '../../actions/cartAction';
// import PriceSorter from '../PriceSorter/PriceSorter';
import Filter from '../Filter/Filter';
import SearchBar from '../Search/Search';
import './Fruits.css';

class Fruits extends React.Component {

  constructor(props){
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  componentWillMount(){
    const {sortBy,searchBy,filterBy} = this.props
    this.props.fetchProducts(sortBy,searchBy,filterBy.filterByPrice,filterBy.filterByCategory)
  }

  componentDidUpdate(prevProps,prevState) {

    const {sortBy,searchBy,filterBy} = this.props
    if(this.props.sortBy !== prevProps.sortBy  || this.props.searchBy !== prevProps.searchBy || this.props.filterBy !== prevProps.filterBy){

    this.props.fetchProducts(sortBy,searchBy,filterBy.filterByPrice,filterBy.filterByCategory)

    }

  }

  handleAddToCart(product) {

    this.props.addCartAction(product)

  }
  handleRemoveFromCart(product){

    this.props.removeCartAction(product)
  }

  render(){

    const fruits = this.props.products.filter(product => product.category ==='fruits')

    const productList = fruits.map((product) =>
      <div className="boxed" key={product.name}>
        <img src={require(`../../images/${product.image}`)}/><br/>
        {product.name}<br/>
        {product.currency} {product.price}<br/>
      <button className="addBasket" value="Add" onClick={() => this.handleAddToCart(product)}>Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" onClick={() => this.handleRemoveFromCart(product)}>Remove From Cart </button>
      </div>);

  return(

    <div className="products">
      <div className="productsheader">
        <SearchBar/>
        {/* <PriceSorter /> */}
        <h5>Products</h5>

      </div>

      <div className="filter">
        <Filter/>
      </div>
      <div className="productsboxed">

          {productList}

      </div>
    </div>
      );
      }
}

const mapStateToProps = (state) => ({

  products : state.products.products,
  sortBy   : state.sortBy.sortProducts,
  filterBy : state.filterBy,
  searchBy : state.searchBy.search,


})

export default connect(mapStateToProps,{fetchProducts,addCartAction,removeCartAction})(Fruits)
