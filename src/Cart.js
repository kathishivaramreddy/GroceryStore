import React from 'react';

export class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state=null;
    console.log(this.props.data)
  }


  render(){
    // this.setState(this.state.push(this.props.data));
    // const listItems = this.props.data.map((data1) =>
    // <p>{data1.name}{data1.price}</p>);
      return(
      <div >
        <h1>Cart</h1>
        <div >
          {this.props.data}

        </div>
        </div>
        )
  }
}
