import React from 'react';
import PropTypes from 'prop-types';
import './PriceSorter.css';
import {sortProducts} from '../../actions/sortAction';
import {connect} from 'react-redux';

class PriceSorter extends React.Component{


  handleSort(event){
    
    this.props.sortProducts(event.target.value)

  }

  render(){
    return(
    <div>
      <select className="priceSorter" onClick={this.handleSort.bind(this)}>
        <option value="LOW" > Price-Low to High</option>
        <option value="HIGH" > Price-High to Low</option>
      </select>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({

    sortBy : state.sortBy.sortBy
})

export default connect(mapStateToProps,{sortProducts})(PriceSorter)
