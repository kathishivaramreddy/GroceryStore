import React from 'react';
import {connect} from 'react-redux';
import {filterPriceAction,filterPriceRemover,
  filterCategoryAction,filterCategoryRemover} from '../actions/filterAction'
import {Filter} from '../Components/Filter/Filter';

export class FilterContainer extends React.Component {


  render() {
    return (
      <div>
        <Filter filterPriceAction={this.props.filterPriceAction} filterPriceRemover={this.props.filterPriceRemover}
          filterCategoryAction={this.props.filterCategoryAction} filterCategoryRemover={this.props.filterCategoryRemover}
        />
      </div>

      );}
}

const mapStateToProps = (state) => ({
  filterBy:state.filterBy
})

const mapDispatchToProps = {
  filterPriceAction,
  filterPriceRemover,
  filterCategoryAction,
  filterCategoryRemover
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)
