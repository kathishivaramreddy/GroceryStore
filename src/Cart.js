import React from 'react';


export class Cart extends React.Component{
  constructor(props){
    super(props);
    // this.listItems.bind(this)

  }



  render(){
      let t=0;

      let listItems = this.props.data.map( (value) => <div className="cart"> {value.name} <hr/>{value.currency} {value.price} </div>)
      let total = this.props.data.map( (value) => t=t+value.price )
      console.log(t);
      return(
      <div >
        <h1>Cart</h1>
        <p>Following products have been added to cart <hr/></p>
        <div className="cart">
          {listItems}
        </div>
        <br/>
        <div className="cart">
        <div className="totalbox">
          Total Amount To Be Paid :-  {total[total.length-1]} INR
        </div>
        <br/>
        <br/>
        <button className="button">Pay</button>
      </div>

      </div>
        )
  }
}
