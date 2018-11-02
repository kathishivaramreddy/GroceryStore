import React from 'react';
import {connect} from 'react-redux';
import {Cart} from '../Components/Cart/Cart';

export class CartContainer extends React.Component {

  render() {

    return (
      <div >

        <Cart cart={this.props.cart}/>

      </div>);}
}

const mapStateToProps = (state) => ({
    cart : state.cart.cartItems
})

export default connect(mapStateToProps,)(CartContainer)
