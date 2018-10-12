import React from 'react';
import {PriceSorter} from './PriceSorter';
import {Filter} from './Filter';
import allProductsList from './AllProducts';
import sortBy from 'lodash/sortBy';
import isNil from 'lodash/isNil';
import merge from 'lodash/merge';
import concat from 'lodash/concat';

import {searchBar} from './Searchbar';
import {productDisplay} from './productsDisplay';
import './Fruits.css';

const addToFilter = (items,value) => {

  return concat(items,value)

}
const addToFilterCategory = (items,value) => {

  return concat(items,value)

}

const removeFromFilter = (items,value) =>{
  return items.filter(item => item.min !== value.min && item.max !== value.max)
}

const removeFromFilterCategory = (items,value) =>{
  return items.filter(item => item.category !== value.category)
}

const setFilterValue = (name) => {
  const checkboxData = {price1:{min:1,max:100},price2:{min:101,max:200},price3:{min:201,max:1000}}

  if(name === 'price1'){
    return checkboxData.price1;
  }
  else if (name ==='price2') {
    return checkboxData.price2;
  }
  else {
    return checkboxData.price3;
    }
}

const setCategoryValue = (name) => {
  const checkboxData = {category:name}
    return checkboxData;
}

const showPopup = () => {
  console.log('showpopup')
  var x = document.getElementById("popup");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
   // alert('item added')
}
export class Fruits extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      products: [],
      filterPrice : [],
      filterCategory: []
    };
    this.handleSelectChange=this.handleSelectChange.bind(this);
    this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
    this.handlePriceFilter = this.handlePriceFilter.bind(this);
    // this.showPopup =this.showPopup.bind(this);
  }

  componentDidMount(){

    const productList = allProductsList().products.filter(product =>  product.category === 'fruits')
    this.setState({products : productList})

  }

  handleSelectChange(e){
    const value = e.target.value
    const sortedState = sortBy(this.state.products,function(product){
       return product.price
     })
    value ==='low' ? this.setState({products : sortedState}) : this.setState({products : sortedState.reverse()})
  }

  handlePriceFilter(e){
    var filterValue = setFilterValue(e.target.name)
    if(e.target.checked){
    const newFilterSearch = addToFilter(this.state.filterPrice,filterValue);
    this.setState({filterPrice: newFilterSearch})
    }
    else{
      const reducedFilterSearch = removeFromFilter(this.state.filterPrice,filterValue);
      this.setState({filterPrice: reducedFilterSearch})

      }
  }

  handleCategoryFilter(e){
    var filterValueCategory = setCategoryValue(e.target.name)
    if(e.target.checked){
    const newFilterCategory = addToFilterCategory(this.state.filterCategory,filterValueCategory);
    this.setState({filterCategory: newFilterCategory})

      }
    else{
      const reducedFilterCategory = removeFromFilterCategory(this.state.filterCategory,filterValueCategory);
      this.setState({filterCategory: reducedFilterCategory})
      }
  }



  render() {

    const {products} = this.state;
    const {onAdd,onRemove,onSearch} = this.props;

    const listItems = productDisplay(products,onAdd,onRemove)
    const searchItems =searchBar(products,onAdd,onRemove,
      onSearch)

    return (
      <div>



        <div>

          <div className="productsheader">

            <PriceSorter sorter={this.handleSelectChange}/>
            <h5>Fruits</h5>
          </div>

          <div className="productsboxed">

            <div>
              <Filter onPriceFilter={this.handlePriceFilter} onCategoryFilter={this.handleCategoryFilter}/>

            </div>

            {searchItems.length === 0 ? listItems : searchItems}

          </div>

        </div>

      </div>
    );
  }
}
