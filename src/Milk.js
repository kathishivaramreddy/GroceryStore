import React from 'react';

export class Milk extends React.Component{
  constructor(props){
    super(props);

    this.state= {
      products : [
          {name:'Almond Milk ',price:250,image:require('./images/almondmilk.jpg')},
          {name:'LowFat Milk',price:150,image:require('./images/lowfatmilk.jpg')},
          {name:'Slim n Trim',price:125,image:require('./images/slimtrimmilk.jpg')},
          {name:'Toned Milk' ,price:95,image:require('./images/tonedmilk.jpg')}
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
        </div>

    );
      return(
        <div>
          <div className="productboxed">
            <h3 align="left" >Milk</h3>
            {listItems}
          </div>
        </div>
          );
}

}
