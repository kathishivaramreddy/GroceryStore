import React from 'react';
import './App.css';
import {Cart} from './Cart.js';


export class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      products : [
            {name:'Apple - Washington',price:250},
            {name:'Grapes - Red',price:150},
            {name:'Radish White',price:125},
            {name:'Kiwi - Green',price:95},
            {name:'Potato/Batate',price:30},
            {name:'Ladies Finger',price:45}
          ],

    cart :[]
  }

    this.addToCart =this.addToCart.bind(this);

}

    addToCart(name,price){
        this.setState({cart:this.state.cart.concat([name,price])})
    }

    render(){
      const listItems = this.state.products.map((data) =>
        <div className="boxed" key={data.name}>

          {data.name}<br/>
          {data.price}<br/>
          <button className="addBasket"  value="Add" onClick={ () => this.addToCart(data.name,data.price)}>Add To Cart </button>
          {/* <Link to='/cart' >  <button className="addBasket"  value="Add" onClick={ () => this.addToCart(data.price)}>Add To Cart </button></Link> */}
        </div>

    );
      return(
        <div>
          <div className="boxed">
            {listItems}
          </div>
          <div className="boxed">
            <Cart data={this.state.cart}/>
          </div>
        </div>
          );
}
}
