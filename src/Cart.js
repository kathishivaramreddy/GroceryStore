import React from 'react';


export class Cart extends React.Component{
  constructor(props){
    super(props);
    // this.listItems.bind(this)
  }

  //
  // listItems = () => {
  //   var items = []
  //   this.props.data.map((item, index) => {
  //       items.push(item.name)
  //     })
  //     var tby = null;
  //        tby = <div>
  //          {items.map((obj, key) => {
  //            return (
  //              obj
  //            )
  //          })}
  //        </div>
  //     return tby;
  //     console.log('after assigning',items);
  //       }

  render(){

    // console.log('coming 3',this.props.data);

    // const listItems = this.props.data.name


    // listItems.map((data,i) =>
    //   <div key={i}>
    //     {data.name}
    //
    //   </div>
    //
    //  );
     // console.log('after mapping',listItems);
    // const {data} = this.props;
      return(
      <div >
        <h1>Cart</h1>
        <p>Following products have been added to cart <hr/></p>
        <div>
          {/* {this.listItems()} */}
        </div>
      </div>
        )
  }
}
