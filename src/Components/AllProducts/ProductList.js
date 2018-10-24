import React from 'react';
import {connect} from 'react-redux';
import './ProductList.css';

class ProductList extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    // const {products} = this.props
    // const ProductList = products.map( product =>
    //   <div>
    //     {product.name}
    //   </div>
    // )
  return(
    <div className="productsboxed">
      Products
    </div>
    );
  }

}

export default ProductList;
