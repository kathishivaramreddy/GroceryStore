import React from 'react';

export class Meat extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      products : [
          {name:'Eggs ',price:250,image:require('./images/eggsmeat.jpg')},
          {name:'Fish',price:150,image:require('./images/fishmeat.jpg')},
          {name:'Mutton',price:125,image:require('./images/muttonmeat.jpg')},
          {name:'Chicken' ,price:95,image:require('./images/chickenskinless.jpg')}
        ]
        }
  }
  render(){
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
            <h3 align="left" >Meat</h3>
            {listItems}
          </div>
        </div>
          );
}

}
