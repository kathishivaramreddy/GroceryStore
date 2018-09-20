import React from 'react';

export class Vegetables extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      products : [
          {name:'carrot ',price:250,image:require('./images/organiccarrot.jpg')},
          {name:'ginger - Red',price:150,image:require('./images/organicginger.jpg')},
          {name:'onion',price:125,image:require('./images/organiconion.jpg')},
          {name:'potato' ,price:95,image:require('./images/organicpotato.jpg')},
          {name:'tomato' ,price:95,image:require('./images/organictomato.jpg')}
        ]
        }
  }
  render(){
      const listItems = this.state.products.map((data) =>
        <div className="boxed" key={data.name}>
          <img src={data.image} alt=''/><br/>
          {data.name}<br/>
          {data.currency} {data.price}<br/>
          <button className="addBasket"  value="Add" onClick={ () => this.props.onClick(data.name)}>Add To Cart </button>
          <button className="addBasket"  value="Remove From Cart" onClick={ () => this.props.onRemove(data.name)}>Remove From Cart </button>
        </div>

    );
      return(
        <div>
          <div className="productboxed">
            <h3 align="left" >Organic Vegetables</h3>
            {listItems}
          </div>
        </div>
          );
}

}
