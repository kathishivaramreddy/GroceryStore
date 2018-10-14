import React from 'react';
import './Filter.css';

export class Filter extends React.Component{

  constructor(props){
    super(props)
    console.log(this.props)
  }

  render(){
    return(
    <div className="filterboxed">
      <h3>Filter here</h3>
      
      <div className="boxed">

        <h4>Price Filter</h4>
        <input type="checkbox" name="price1"  onChange={this.props.onPriceFilter} /> Less Than 100 <br/>
        <input type="checkbox" name="price2"  onChange={this.props.onPriceFilter} /> 101-200<br/>
        <input type="checkbox" name="price3"  onChange={this.props.onPriceFilter} /> 201-1000<br/>
      </div>
      <br/>
      <div className="boxed">

        <h4>Category Filter</h4>
        <input type="checkbox" name="fruits"  onChange={this.props.onCategoryFilter} /> Fruits <br/>
        <input type="checkbox" name="tea"  onChange={this.props.onCategoryFilter} /> Tea<br/>
        <input type="checkbox" name="milk"  onChange={this.props.onCategoryFilter} /> Milk<br/>
      </div>

    </div>);

  }

}
