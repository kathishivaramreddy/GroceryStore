import React from 'react';
import {setFilterValue,setCategoryValue} from './FilterUtil.js';
import './Filter.css';

export class Filter extends React.Component {

  constructor(props){
    super(props);
    this.handlePriceFilter = this.handlePriceFilter.bind(this)
    this.handleCategoryFilter = this.handleCategoryFilter.bind(this)
  }

  handlePriceFilter(event) {

    const filterValue = setFilterValue(event.target.name)
    if(event.target.checked){
    this.props.filterPriceAction(filterValue)
      }
    else{
      this.props.filterPriceRemover(filterValue)
      }
  }

  handleCategoryFilter(event){

    const filterValue = setCategoryValue(event.target.name)
    if(event.target.checked){
    this.props.filterCategoryAction(filterValue)
  }
    else{
      this.props.filterCategoryRemover(filterValue)
    }
  }
  render() {
    return (
      <div className="filterboxed">
        <h3>Filter here</h3>

        <div className="boxed">

          <h4>Price Filter</h4>

          <input type="checkbox" name="price1" onChange={this.handlePriceFilter} /> Less Than 100 <br/>
          <input type="checkbox" name="price2" onChange={this.handlePriceFilter} /> 101-200<br/>
          <input type="checkbox" name="price3" onChange={this.handlePriceFilter} /> 201-1000<br/>

        </div>
        <br/>
        <div className="boxed">

          <h4>Category Filter</h4>
          <input type="checkbox" name="fruits" onChange={this.handleCategoryFilter} /> Fruits <br/>
          <input type="checkbox" name="tea" onChange={this.handleCategoryFilter} /> Tea<br/>
          <input type="checkbox" name="milk" onChange={this.handleCategoryFilter} /> Milk<br/>
          <input type="checkbox" name="vegetable" onChange={this.handleCategoryFilter} /> Vegetable<br/>
          <input type="checkbox" name="coffee" onChange={this.handleCategoryFilter} /> Coffee<br/>
          <input type="checkbox" name="meat" onChange={this.handleCategoryFilter} /> Meat<br/>
        </div>

      </div>);
  }
}
