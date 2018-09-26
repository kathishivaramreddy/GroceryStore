import React from 'react';
import sum from 'lodash/sum';
import isEmpty from 'lodash/isEmpty';
import {Link} from 'react-router-dom';

export class Cart extends React.Component {

  render() {
    console.log('props in cart',this.props)
    if(isEmpty(this.props.data)) {
        return <h3>No Products Added</h3>;
    }

    const listItems = this.props.data.map( (value) => <div className="cart" key={value.name}>   <img src={value.image} alt='' /> <br/> {value.name} <br/> Cost:-{value.price} {value.currency} <br/>Quantity :- {value.quantity} </div>);

    const total = sum(this.props.data.map((product) => product.price * product.quantity));
    return (
      <div >
        <h1>Cart</h1>
        <button className="clearCart" align="right" onClick={this.props.clearCart}>Clear Cart</button>
        <p>Following products have been added to cart </p>

        <div className="cart">
          {listItems}
        </div>

        <div className="cart">
          <div className="totalbox">
            Total Amount To Be Paid :-  {total} INR
          </div>
        </div>

        <Link className="button" to='checkout'>Pay</Link>

      </div>
    );
  }
}
