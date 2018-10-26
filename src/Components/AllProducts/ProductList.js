import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/productAction'
import PriceSorter from '../PriceSorter/PriceSorter';
import './ProductList.css';

export class ProductList extends React.Component {

  constructor(props){
    super(props);

  }

  componentWillMount(){
    const {sortBy} = this.props
    this.props.fetchProducts(sortBy)
  }

  componentDidUpdate(prevProps) {
    const {sortBy} = this.props
    if(this.props.sortBy !== prevProps.sortBy){

    this.props.fetchProducts(sortBy)}

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

        <PriceSorter />
        <h5>Products</h5>

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
  sortBy   : state.sortBy.sortBy

})

export default connect(mapStateToProps,{fetchProducts})(ProductList)
