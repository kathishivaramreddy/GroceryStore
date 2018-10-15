import React from 'react';
import PropTypes from 'prop-types';
import './PriceSorter.css';

export class PriceSorter extends React.Component{

  render(){
    return(
    <div>
      <select className="priceSorter" onClick={this.props.sorter}>
        <option value="low" > Price-Low to High</option>
        <option value="high" > Price-High to Low</option>
      </select>
    </div>
    )
  }
}
PriceSorter.propTypes = {
    sorter : PropTypes.func,
}
