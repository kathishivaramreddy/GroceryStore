import React from 'react'

export class Filter extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
    <div className="filterboxed">
      <h3>Filter here</h3>
      <hr/>
      <div className="boxed">

        <h4>Price Filter</h4>
        <input type="checkbox" name="price1"  onChange={this.handleCheckBox} /> Less Than 100 <br/>
        <input type="checkbox" name="price2"  onChange={this.handleCheckBox} /> 101-200<br/>
        <input type="checkbox" name="price3"  onChange={this.handleCheckBox} /> 201-1000<br/>
      </div>
      <br/>
      <div className="boxed">

        <h4>Category Filter</h4>
        <input type="checkbox" name="fruits"  onChange={this.handleCategoryFilter} /> Fruits <br/>
        <input type="checkbox" name="tea"  onChange={this.handleCategoryFilter} /> Tea<br/>
        <input type="checkbox" name="milk"  onChange={this.handleCategoryFilter} /> Milk<br/>
      </div>

    </div>);

  }

}
