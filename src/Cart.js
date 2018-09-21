import React from 'react';
import {Link,BrowserRouter as Router,Route} from 'react-router-dom';
import {Checkout} from './Checkout'

export class Cart extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
      let amount=0;
      console.log(this.props.data)
      let listItems = this.props.data.map( (value) => <div className="cart"> {value.name} <hr/>{value.currency} {value.price} </div>)
      let total = this.props.data.map( (value) => amount=amount+value.price )
      return(
      <div >

        <h1>Cart</h1>
        <p>Following products have been added to cart <hr/></p>
        <div className="cart">
          {listItems}
        </div>
        <br/>
        <div className="cart">
          <div className="totalbox">
            Total Amount To Be Paid :-  {total[total.length-1]} INR
          </div>
          <br/>
          <br/>
          <Link className="button" to='checkout'>Pay</Link>
          {/* <Router>
            <div>
              <Link to='checkout'> Pay </Link>
            </div>
            <div>
              <Route path='/checkout' component={Checkout}/>
            </div>
          </Router> */}
      </div>

      </div>
        )
  }
}
