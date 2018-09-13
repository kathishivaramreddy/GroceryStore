import React from 'react';
import { Link } from 'react-router-dom';
import {Checkout} from './Checkout';
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
    {name:'Ladies Finger',price:45}]

    this.handleClick =this.handleClick.bind(this);
}

  handleClick(price){
     alert('Price to be paid :-' + price);

      }

    render(){
      const listItems = this.state.map((data) =>
        <div className="boxed" key={data.name}>
          {data.name}<br/>
          {data.price}<br/>
          <Link to="/checkout"><input className="addBasket" type="submit" value="Buy" onClick={ () => this.handleClick(data.price)} /></Link>

        </div>

    );
      return(
        <div>
          {listItems}
        </div>
          );
}
}
