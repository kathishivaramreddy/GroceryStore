import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import sum from 'lodash/sum';
import isEmpty from 'lodash/isEmpty';
import {displayCartItems,totalAmountCalculator,buttonToClearCart}
        from './CartUtil'
import './Cart.css';
import {connect} from 'react-redux';

class Cart extends React.Component {

  render() {

    const emptyCartMessage = <p>Your Cart is empty.Start shopping now</p>;

    const listItems = displayCartItems(this.props.cart)

    const totalAmountToBePaid = totalAmountCalculator(this.props.cart)
    // const clearCart = buttonToClearCart(this.props.clearCart)

    return (
      <div >
        <div className="dropdown">

          <button className="dropbtn" ><img className="cartIcon" src={require('../../images/cartimage.jpg') } alt="carticon"/>Cart </button>
          <div className="dropdown-content">
            {/* {isEmpty(this.props.cart) ? '' : clearCart } */}
            <ul className="cart">
              {isEmpty(this.props.cart) ? emptyCartMessage : listItems }

            </ul>
            <div className="totalprice">
              {isEmpty(this.props.cart) ? '' : totalAmountToBePaid}
            </div>
            <br/>

            {/* <div className="checkoutsection">
              {isEmpty(this.props.data) ? '' :<Link className="checkout" to='checkout'>View Cart & Checkout</Link>}
            </div> */}
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart : state.cart.cartItems

})


export default connect(mapStateToProps,)(Cart)
