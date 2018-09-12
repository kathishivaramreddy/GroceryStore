import React from 'react';
import './App.css';

export class ProductList extends React.Component{
  constructor(props){
    super(props);
    this.state=[
    {name:'Apple - Washington',price:250},
    {name:'Grapes - Red',price:150},
    {name:'Radish White',price:125},
    {name:'Kiwi - Green',price:95},
    {name:'Potato/Batate',price:30},
    {name:'Ladies Finger',price:45}
  ]
}
    render(){
      const listItems = this.state.map((data) =>
        <div className="boxed" key={data.name}>{data.name}
          <br/>{data.price}</div>
    );
      return(
        <div>
          {listItems}
        </div>
          );
}
}
