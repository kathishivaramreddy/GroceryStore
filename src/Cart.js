import React from 'react';
import sum from 'lodash/sum';
import isEmpty from 'lodash/isEmpty';
import {Link} from 'react-router-dom';

export class Cart extends React.Component {
  render() {
    if(isEmpty(this.props.data)) {
        return <h3>No Products Added</h3>;
    }

    const listItems = this.props.data.map((value) => <div className="cart"> {value.name} <hr/>{value.currency} {value.price} <br/>{value.quantity} </div>);

    const total = sum(this.props.data.map((product) => product.price * product.quantity));
    return (
      <div >

        <h1>Cart</h1>
        <p>Following products have been added to cart <hr/></p>
        <div className="cart">
          {listItems}
        </div>
        <br/>
        <div className="cart">
          <div className="totalbox">
            Total Amount To Be Paid :-  {total} INR
          </div>
          <br/>
          <br/>
          <Link className="button" to='checkout'>Pay</Link>
        </div>
      </div>
    );
  }
}
