import React from 'react';
import { Link } from 'react-router-dom';
import {Checkout} from './Checkout';
import './App.css';
import navigate from './navigate';
import {Cart} from './Cart.js';

export class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.state=[
    {name:'Apple - Washington',price:250},
    {name:'Grapes - Red',price:150},
    {name:'Radish White',price:125},
    {name:'Kiwi - Green',price:95},
    {name:'Potato/Batate',price:30},
    {name:'Ladies Finger',price:45}],

    this.cart =[]
    this.addToCart =this.addToCart.bind(this);

}

    addToCart(price){
      // return this.cart.push(price);
      return this.price;
    }

    render(){
      const listItems = this.state.map((data) =>
        <div className="boxed" key={data.name}>
          {data.name}<br/>
          {data.price}<br/>
          <button className="addBasket"  value="Add" onClick={ () => this.addToCart(data.price)}>Add To Cart </button>
          {/* <Link to='/checkout' >  <button className="addBasket"  value="Add" onClick={ () => this.handleClick(data.price)}>Add To Cart </button></Link> */}
          {/* <button className="addBasket"  value="Buy" onClick={ () => navigate('http://localhost:3000/#/checkout')}>Add To Cart </button> */}
        </div>

    );
      return(
        <div>
          <div className="boxed">
            {listItems}
          </div>
          <div className="boxed">
            <Cart data={this.addToCart} />
          </div>
        </div>
          );
}
}
