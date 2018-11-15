import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productAction';
import {addCartAction,removeCartAction} from '../actions/cartAction';
import {ProductList} from  '../Components/ProductList/ProductList';

export class MeatContainer extends React.Component {



  componentWillMount(){
    const url = 'http://localhost:8080/meat'
    const {sortBy,searchBy,filterBy} = this.props
    this.props.fetchProducts(sortBy,searchBy,filterBy.filterByPrice,filterBy.filterByCategory,url)
  }

  componentDidUpdate(prevProps,prevState) {
    const url = 'http://localhost:8080/meat'
    const {sortBy,searchBy,filterBy} = this.props
    if(this.props.sortBy !== prevProps.sortBy
       || this.props.searchBy !== prevProps.searchBy
       || this.props.filterBy !== prevProps.filterBy){

    this.props.fetchProducts(sortBy,searchBy,filterBy.filterByPrice,filterBy.filterByCategory,url)

    }

  }

  render(){

  return(

    <div>
      <ProductList products={this.props.products} addCartAction={this.props.addCartAction}
        removeCartAction={this.props.removeCartAction}/>
    </div>
        );}
}

const mapStateToProps = (state) => ({
  products : state.products.products,
  sortBy   : state.sortBy.sortProducts,
  filterBy : state.filterBy,
  searchBy : state.searchBy.search,
})

export default connect(mapStateToProps,{fetchProducts,addCartAction,removeCartAction})(MeatContainer)
