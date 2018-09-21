import React from 'react';
import './App.css';



export class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      products : [
            {name:'Apple',price:250,image:require('./images/apple.jpg'),currency:'INR'},
            {name:'Grapes - Red',price:150,image:require('./images/grapes.jpg'),currency:'INR'},
            {name:'Tomato',price:125,image:require('./images/tomato.jpg'),currency:'INR'},
            {name:'Kiwi - Green',price:95,image:require('./images/kiwi.jpg'),currency:'INR'},
            {name:'Potato/Batate',price:30,image:require('./images/potato.jpg'),currency:'INR'},
            {name:'LadiesFinger',price:45,image:require('./images/ladiesfinger.jpg'),currency:'INR'}
          ]
  }
}
  render(){
      console.log('coming 2 in productlist', this.props);
      const listItems = this.state.products.map((data) =>
        <div className="boxed" key={data.name}>
          <img src={data.image} alt=''/><br/>
          {data.name}<br/>
          {data.currency} {data.price}<br/>
          <button className="addBasket"  value="Add" onClick={ () => this.props.onClick(data.name,data.currency,data.price)}>Add To Cart </button>
          <button className="addBasket"  value="Remove From Cart" onClick={ () => this.props.onRemove(data.name)}>Remove From Cart </button>
        </div>

    );
      return(
        <div>

          <div className="productboxed">
            <h3 align="left">All Products</h3>
            {listItems}
          </div>
          {/* <div className="boxed">
            <Cart data={this.state.cart}/>
          </div> */}
        </div>
          );
}
}
