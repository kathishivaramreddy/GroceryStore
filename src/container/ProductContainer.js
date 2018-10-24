import React from 'react';
import ProductList from '../Components/AllProducts/ProductList';
import {productAction} from '../actions/productAction';
import {connect} from 'react-redux';

export class ProductContainer extends React.Component {


  render(){
    return(
      <ProductList/>
    )
  }
}

// const mapStateToProps = (state) => {
//   return state
// };


// export default connect(mapStateToProps,productAction)(ProductContainer)
