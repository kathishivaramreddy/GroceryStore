import React from 'react';
import './Cart.css';
import sum from 'lodash/sum';
import isEmpty from 'lodash/isEmpty';
import {Link} from 'react-router-dom';


export class Cart extends React.Component {
  render() {
    const emptyCart = <p>Your Cart is empty.Start shopping now</p>;
    const listItems = this.props.data.map( (value) =>
      <div className="cartitems">
        <li className ="cart" key={value.name}>
          <img className ="cartImage" src={value.image} alt='product' /> <br/> {value.name} <br/> Cost:-{value.price} {value.currency} <br/>Quantity :- {value.quantity}
        </li>
      </div>);

    const total = <div> <b> Total Charges:-</b>{sum(this.props.data.map((product) =>
      product.price * product.quantity ))} INR </div>;

    const clearCart =<div> <h4>Cart</h4>
      <button className="clearCart" onClick={this.props.clearCart}>Clear Cart</button> </div>;

    return (
      <div >

        <div className="dropdown">
          <button className="dropbtn" ><img className="cartIcon" src={require('./images/cartimage.jpg') } alt="carticon"/>Cart </button>
          <div className="dropdown-content">
            {isEmpty(this.props.data) ? '' : clearCart }
            <ul className="cart">
              {isEmpty(this.props.data) ? emptyCart : listItems }
            </ul>
            <div className="totalprice">
              {isEmpty(this.props.data) ? '' : total}
            </div>
            <br/>

            <div className="checkoutsection">
              {isEmpty(this.props.data) ? '' :<Link className="checkout" to='checkout'>View Cart & Checkout</Link>}
            </div>
          </div>
        </div>

      </div>
    );
  }
}
