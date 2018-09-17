import React from 'react';
import ReactDOM from 'react-dom'
import './App.css'
import { Router, Route, hashHistory } from 'react-router';
import history from './history';
import registerServiceWorker from './registerServiceWorker';

export class Checkout extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props);
    return(
      <div>
        <form className = "boxed">
          {/* Add price props here */}
          <label>MobileNumber:- <input type="text" /></label><br/>
          <label>Address:- <input type="text" /></label>
          <br/>
          {/* <p>{this.props.location.state.price}</p> */}
          <input type="submit" value="PlaceOrder"/>
        </form>
        </div>
    )
  }
}
