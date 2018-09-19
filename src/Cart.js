import React from 'react';


export class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state={arr:[]};
    this.updateState = this.updateState.bind(this);
  }
  updateState(){

      this.setState({arr:this.state.arr.concat(this.props.data)})

}
  render(){
      return(
      <div >
        <h1>Cart</h1>
        <p>{this.state.arr}</p>
        <button onClick={this.updateState}>Show the Cart</button>
      </div>
        )
  }
}
