import React from 'react';
import allProductsList from './AllProducts';
import {PriceSorter} from './PriceSorter';
import {Filter} from './Filter';

const milkList = (milk) => {

  const listItems = milk.map((product) =>
    <div className="boxed" key={product.name}>
      <img src={product.image} alt=''/><br/>
      {product.name}<br/>
      {product.currency} {product.price}<br/>
      <button className="addBasket" value="Add" onClick={ () => this.props.onClick(product.name, product.currency, product.price)}>Add To Cart </button>
      <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(product.name)}>Remove From Cart </button>
    </div>)

    return listItems;
}

export class Milk extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      products: [],
    };
  }
  componentDidMount(){

    const productList = allProductsList().products.filter(product =>  product.category === 'milk')

    this.setState({products : productList})

  }
  render() {
    const {products} = this.state;
    return (
      <div>
        <div className="productboxed">
          <PriceSorter/>
          <h3 align="left" >Milk</h3>
          <Filter/>
          {milkList(products)}

        </div>
      </div>
    );
  }
}
