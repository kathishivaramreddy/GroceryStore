import React from 'react';
import {Cart} from './Cart';

export class Fruits extends React.Component{
    constructor(props){
      super(props);
      this.state= {
        products : [
            {name:'Apple ',price:250,image:require('./images/apple.jpg')},
            {name:'Grapes - Red',price:150,image:require('./images/grapes.jpg')},
            {name:'Banana',price:125,image:require('./images/banana.jpg')},
            {name:'Kiwi' ,price:95,image:require('./images/kiwi.jpg')},
          ],

          cart :[]
          }
          this.addtoCart=this.addToCart.bind(this)
    }
    addToCart(name,price){
        this.setState({cart:this.state.cart.concat([name,price])})
        
    }

    render() {
      const listItems = this.state.products.map((data) =>
        <div className="boxed" key={data.name}>

          <img src={data.image} alt=''/><br/>
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
