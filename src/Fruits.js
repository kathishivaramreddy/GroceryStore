import React from 'react';
import {PriceSorter} from './PriceSorter';
import {Filter} from './Filter';
import allProductsList from './AllProducts';
import sortBy from 'lodash/sortBy';
import {setFilterValue,addToFilter,removeFromFilter,setCategoryValue,
  addToFilterCategory,removeFromFilterCategory,getFilteredList} from './FilterUtil.js';
import {searchBar} from './Searchbar';
import {productDisplay} from './productsDisplay';
import './Fruits.css';

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
    console.log('filterprice',this.state.filterPrice)
    console.log('filterCategory',this.state.filterCategory)

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

    const listItems = productDisplay(products,onAdd,onRemove)
    const searchItems =searchBar(products,onAdd,onRemove,
      onSearch)

    const filterItems = getFilteredList(products,filterCategory,filterPrice,onAdd,onRemove)

    return (
      <div>

        <div className="fruits">

          <div className="productsheader">

            <PriceSorter sorter={this.handleSelectChange}/>
            <h5>Fruits</h5>
          </div>

          <div className="productsboxed">

            <div>
              <Filter onPriceFilter={this.handlePriceFilter} onCategoryFilter={this.handleCategoryFilter}/>

            </div>

            {searchItems.length === 0 ? filterItems.length === 0 ? listItems: filterItems
            : searchItems}

          </div>

        </div>

      </div>
    );
  }
}
