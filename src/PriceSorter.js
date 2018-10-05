import React from 'react';

export class PriceSorter extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
    <div>
      <select className="position" onClick={this.props.sorter}>
        <option value="low" > Price-Low to High</option>
        <option value="high" > Price-High to Low</option>
      </select>
    </div>
      )
  }
}
