import React from 'react';

export class Coffee extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      products : [
          {name:'Classic Cofee ',price:250,image:require('./images/coffeeclassic.jpg')},
          {name:'Sunrise Coffee',price:150,image:require('./images/coffeesunrise.jpg')},
          {name:'Filter Coffee',price:125,image:require('./images/filtercoffee.jpg')}
        ]
        }
  }
  render(){
      const listItems = this.state.products.map((data) =>
        <div className="boxed" key={data.name}>
          <img src={data.image} alt=''/><br/>
          {data.name}<br/>
          {data.currency} {data.price}<br/>
          <button className="addBasket"  value="Add To Cart" onClick={ () => this.props.onClick(data.name)}>Add To Cart </button>
          <button className="addBasket"  value="Remove From Cart" onClick={ () => this.props.onRemove(data.name)}>Remove From Cart </button>
        </div>

    );
      return(
        <div>
          <div className="productboxed">
            <h3 align="left" >Coffee</h3>
            {listItems}
          </div>
        </div>
          );
}

}
