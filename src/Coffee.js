import React from 'react';
import allProductsList from './AllProducts';

import {PriceSorter} from './PriceSorter';
import {Filter} from './Filter';

export class Coffee extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      products: [],
    };
  }

  componentDidMount(){

    const productList = allProductsList().products.filter(product =>  product.category === 'coffee')
    this.setState({products : productList})

  }

  render() {
    const listItems = this.state.products.map((data) =>
      <div className="boxed" key={data.name}>
        <img src={data.image} alt=''/><br/>
        {data.name}<br/>
        {data.currency} {data.price}<br/>
        <button className="addBasket" value="Add To Cart" onClick={ () => this.props.onClick(data.name, data.currency, data.price)}>Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(data.name)}>Remove From Cart </button>
      </div>

    );
    return (
      <div>
        <div className="productboxed">
          <PriceSorter />
          <h3>Coffee</h3>
          <Filter />
          {listItems}
        </div>
      </div>
    );
  }
}
