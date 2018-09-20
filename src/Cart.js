import React from 'react';


export class Cart extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log('coming 2', this.props.data);
      return(
      <div >
        <h1>Cart</h1>
        <p>Following products have been added to cart <hr/>
          {this.props.data}</p>
      </div>
        )
  }
}
