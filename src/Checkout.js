import React from 'react';

export class Checkout extends React.Component{

  render(){
    return(
      <form className = "boxed">
        {/* Add price props here */}
          <label>MobileNumber:- <input type="text" /></label><br/>
          <label>Address:- <input type="text" /></label>
          <br/>
          <input type="submit" value="PlaceOrder"/>
        </form>
    )
  }
}
