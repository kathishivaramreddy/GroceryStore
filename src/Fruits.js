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
          ]
          }
  }


    render() {
      const listItems = this.state.products.map((data) =>
        <div className="boxed" key={data.name}>

          <img src={data.image} alt=''/><br/>
          {data.name}<br/>
          {data.price}<br/>
          <button className="addBasket"  value="Add" onClick={ () => this.props.onClick(data.name,data.currency,data.price)}>Add To Cart </button>
          <button className="addBasket"  value="Remove From Cart" onClick={ () => this.props.onRemove(data.name)}>Remove From Cart </button>
        </div>
      );
        return(
          <div>
            <div className="productboxed">
              <h3 align="left">Fruits</h3>
              {listItems}
            </div>
          </div>
            );

          }


        }
