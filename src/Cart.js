import React from 'react';


export class Cart extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log('coming 3', this.props.data);
    const listItems = this.props.data.map((data) =>
      <div className="cart">
        {data}<br/>
      </div>
  );
      return(
      <div >
        <h1>Cart</h1>
        <p>Following products have been added to cart <hr/></p>
        <div>
          { listItems}
        </div>
      </div>
        )
  }
}
