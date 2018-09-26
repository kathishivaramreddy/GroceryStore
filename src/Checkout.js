import React from 'react';
import sum from 'lodash/sum';
import './App.css';

export class Checkout extends React.Component {
  
  render() {
    console.log('price in checkout',this.props.totalPrice)
    const total = sum(this.props.totalPrice.map((product) => product.price * product.quantity));
    console.log('in checkout');
    return (
      <div className="checkoutboxed">
        <h1>Welcome To Checkout</h1>
        <h5>Total amount to be paid:- {total}</h5>
      </div>
    );
  }
}
