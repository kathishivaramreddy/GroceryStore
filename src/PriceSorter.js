import React from 'react';
import './PriceSorter.css';

export class PriceSorter extends React.Component{
  
  render(){
    console.log('props in cart',this.props)
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
