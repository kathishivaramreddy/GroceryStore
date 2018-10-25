import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/productAction'
// import store from '../../store'
import './ProductList.css';

export class ProductList extends React.Component {

  constructor(props){
    super(props);

  }
  componentWillMount(){
    this.props.fetchProducts()
  }

  render(){
    // console.log('products props',this.props)
    const productList =  this.props.products.map((product) =>
      <div className="boxed" key={product.name}>
        <img src={require(`../../images/${product.image}`)}/><br/>
        {product.name}<br/>
        {product.currency} {product.price}<br/>
        <button className="addBasket" value="Add" >Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" >Remove From Cart </button>
      </div>);
  return(

    <div className="productsboxed">

      {productList}

    </div>
    );
  }

}

const mapStateToProps = (state) => ({

  products : state.products.products

})

export default connect(mapStateToProps,{fetchProducts})(ProductList)
