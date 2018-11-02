import React from 'react';
import PropTypes from 'prop-types';
import {setFilterValue,setCategoryValue} from './FilterUtil.js';
import {connect} from 'react-redux';
import {filterPriceAction,filterPriceRemover,
  filterCategoryAction,filterCategoryRemover} from '../../actions/filterAction'
import './Filter.css';

export class Filter extends React.Component {

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

          <input type="checkbox" name="price1" onChange={this.handlePriceFilter.bind(this)} /> Less Than 100 <br/>
          <input type="checkbox" name="price2" onChange={this.handlePriceFilter.bind(this)} /> 101-200<br/>
          <input type="checkbox" name="price3" onChange={this.handlePriceFilter.bind(this)} /> 201-1000<br/>

        </div>
        <br/>
        <div className="boxed">

          <h4>Category Filter</h4>
          <input type="checkbox" name="fruits" onChange={this.handleCategoryFilter.bind(this)} /> Fruits <br/>
          <input type="checkbox" name="tea" onChange={this.handleCategoryFilter.bind(this)} /> Tea<br/>
          <input type="checkbox" name="milk" onChange={this.handleCategoryFilter.bind(this)} /> Milk<br/>
          <input type="checkbox" name="vegetable" onChange={this.handleCategoryFilter.bind(this)} /> Vegetable<br/>
          <input type="checkbox" name="coffee" onChange={this.handleCategoryFilter.bind(this)} /> Coffee<br/>
          <input type="checkbox" name="meat" onChange={this.handleCategoryFilter.bind(this)} /> Meat<br/>
        </div>

      </div>);
  }
}

const mapStateToProps = (state) => ({
  // console.log(ownProps)
  filterBy:state.filterBy

})

export default connect(mapStateToProps,{filterPriceAction,filterPriceRemover,filterCategoryAction,filterCategoryRemover})(Filter)
