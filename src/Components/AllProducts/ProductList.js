import React from 'react';
import {PriceSorter} from '../PriceSorter/PriceSorter';
import {Filter} from '../Filter/Filter';
import {searchBar} from '../Util/Searchbar';
import {productDisplay} from '../Util/ProductsDisplay';
import {setFilterValue,addToFilter,removeFromFilter,setCategoryValue,
  addToFilterCategory,removeFromFilterCategory
  ,applyCategoryFilter,applyPriceFilter} from '../Filter/FilterUtil.js';
import sortBy from 'lodash/sortBy';
import isEmpty from "lodash/isEmpty";
import './ProductList.css';



export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      products: [],
      isLoaded:false,
      filterPrice : [],
      filterCategory: []
    };
    this.handleSelectChange=this.handleSelectChange.bind(this);
    this.handlePriceFilter=this.handlePriceFilter.bind(this);
    this.handleCategoryFilter=this.handleCategoryFilter.bind(this);
  }

  componentDidMount(){
        this.fetchData();
  }

  fetchData(){
    fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then( json => {
      this.setState({
                      products : json.products,
                      isLoaded: true,
                    })
    })
    .catch(
      error => console.log('fetch error',error)
    )
  }

  handleSelectChange(e){
    var value = e.target.value
    let sortedState = sortBy(this.state.products,function(product){ return product.price })
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

    const {isLoaded,products,filterCategory,filterPrice} = this.state;
    const {onAdd,onRemove,onSearch } = this.props;
    if(!isLoaded){
      return (
        <div>
          <div className="loader">
          </div>
          <h5 className="loaderData">Data Loading ... </h5>
        </div>
      )
    }
    const searchItems = onSearch === "" ? products : products.filter(product => product.name.toUpperCase() === onSearch.toUpperCase())

    const itemsAfterCategoryFilter = isEmpty(filterCategory) ? searchItems : applyCategoryFilter(searchItems, filterCategory)
    const itemsAfterPriceFilter = isEmpty(filterPrice) ? itemsAfterCategoryFilter : applyPriceFilter(itemsAfterCategoryFilter, filterPrice);

    const listItems = productDisplay(itemsAfterPriceFilter,onAdd,onRemove);

      return (
      <div >

        <div >

          <div className ="productsheader">

            <h5>All Products</h5>
            <PriceSorter sorter={this.handleSelectChange}/>

          </div>

          <div className="productsboxed">

            <div>
              <Filter onPriceFilter={this.handlePriceFilter} onCategoryFilter={this.handleCategoryFilter}/>
            </div>


            {listItems}

          </div>

        </div>

      </div>
    );
  }
}
