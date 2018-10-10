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
    const {products } = this.state;

    const listItems = products.map((product) =>
      <div className="boxed" key={product.name}>
        <img src={product.image} alt=''/><br/>
        {product.name}<br/>
        {product.currency} {product.price}<br/>
        <button className="addBasket" value="Add" onClick={ () => this.props.onAdd(product.name, product.currency, product.price,product.image,product.image)}>Add To Cart </button>
        <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(product.name)}>Remove From Cart </button>
      </div>)

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
