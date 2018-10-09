import React from 'react';
import {PriceSorter} from './PriceSorter';
import allProductsList from './AllProducts'

export class Fruits extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      products: [],
    };
  }

  componentDidMount(){

    const productList = allProductsList().products.filter(product =>  product.category === 'fruits')

    this.setState({products : productList})

  }

  render() {

    const listItems = this.state.products.map((data) =>
      <div className="boxed" key={data.name}>

        <img src={data.image} alt=''/><br/>
        {data.name}<br/>
        {data.price}<br/>
        <button className="addBasket" value="Add" onClick={ () => this.props.onClick(data.name, data.currency, data.price)}>Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(data.name)}>Remove From Cart </button>
      </div>
    );
    return (
      <div>
        <div className="productboxed">
          <div className ="productheader">

            <h3 align="position">Fruits</h3>
            <PriceSorter/>

          </div>

            {listItems}


        </div>
      </div>
    );
  }
}
