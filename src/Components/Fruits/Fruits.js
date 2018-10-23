import React from 'react';
import PropTypes from 'prop-types';
import allProductsList from '../Data/AllProducts';
import {setFilterValue,addToFilter,removeFromFilter,setCategoryValue,
  addToFilterCategory,removeFromFilterCategory
  ,applyCategoryFilter,applyPriceFilter} from '../Filter/FilterUtil.js';
import {productDisplay} from '../Util/ProductsDisplay';
import {PriceSorter} from '../PriceSorter/PriceSorter';
import {Filter} from '../Filter/Filter';
import './Fruits.css';
import isEmpty from "lodash/isEmpty";
import sortBy from 'lodash/sortBy';

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
    const filterValue = setFilterValue(e.target.name)
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
    const filterValueCategory = setCategoryValue(e.target.name)
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

    const {products,filterCategory,filterPrice} = this.state;
    const {onAdd,onRemove,onSearch} = this.props;

    const searchItems = onSearch === "" ? products : products.filter(product => product.name.toUpperCase() === onSearch.toUpperCase())

    const itemsAfterCategoryFilter = isEmpty(filterCategory) ? searchItems : applyCategoryFilter(searchItems, filterCategory)
    const itemsAfterPriceFilter = isEmpty(filterPrice) ? itemsAfterCategoryFilter : applyPriceFilter(itemsAfterCategoryFilter, filterPrice);

    const listItems = productDisplay(itemsAfterPriceFilter,onAdd,onRemove);

    return (


        <div className="fruits">

          <div className="productsheader">

            <PriceSorter sorter={this.handleSelectChange}/>
            <h5>Fruits</h5>
          </div>

          <div className="productsboxed">
            
            <div>
              <Filter onPriceFilter={this.handlePriceFilter} onCategoryFilter={this.handleCategoryFilter}/>

            </div>

            {listItems}

          </div>

        </div>


    );
  }
}

Fruits.propTypes = {
    onAdd : PropTypes.func,
    onRemove : PropTypes.func,
    onSearch : PropTypes.string
}
