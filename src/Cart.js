import React from 'react';
import sum from 'lodash/sum';
import isEmpty from 'lodash/isEmpty';
import {Link} from 'react-router-dom';
import './Cart.css';

export class Cart extends React.Component {

  render() {

    const emptyCart =  <h3>No Products Added</h3>;


    const listItems = this.props.data.map( (value) => <li className="cart" key={value.name}>
      <img className ="cartImage" src={value.image} alt='image' /> <br/> {value.name} <br/> Cost:-{value.price} {value.currency} <br/>Quantity :- {value.quantity} </li>);

    const total = sum(this.props.data.map((product) => product.price * product.quantity));
    return (
      <div >
        {/* <h1>Cart</h1>
        <button className="clearCart" align="right" onClick={this.props.clearCart}>Clear Cart</button> */}

        <div class="dropdown">
          <button class="dropbtn" >Cart </button>
          <div class="dropdown-content">

            <ul className="cart">
              {isEmpty(this.props.data) ? emptyCart : listItems }
                </ul>

          </div>
        </div>



        {/* <div className="cart">
          <div className="totalbox">
            Total Amount To Be Paid :-  {total} INR
          </div>
          </div>

        <Link className="button" to='checkout'>Pay</Link> */}

      </div>
    );
  }
}
