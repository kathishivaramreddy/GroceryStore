import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import sum from 'lodash/sum';
import isEmpty from 'lodash/isEmpty';
import {displayCartItems,totalAmountCalculator,buttonToClearCart}
        from './CartUtil'
import './Cart.css';

export class Cart extends React.Component {

  render() {

    const emptyCartMessage = <p>Your Cart is empty.Start shopping now</p>;

    const listItems = displayCartItems(this.props.cart)

    const totalAmountToBePaid = totalAmountCalculator(this.props.cart)


    return (
      <div >
        <div className="dropdown">

          <button className="dropbtn" ><img className="cartIcon" src={require('../../images/cartimage.jpg') } alt="carticon"/>Cart </button>

          <div className="dropdown-content">
            <h4>Cart</h4>
            <ul className="cart">
              {isEmpty(this.props.cart) ? emptyCartMessage : listItems }
            </ul>
            <div className="totalprice">
              {isEmpty(this.props.cart) ? '' : totalAmountToBePaid}
            </div>
            <br/>

          </div>
        </div>

      </div>
    );
  }
}
