import React from 'react';
import allProductsList from './AllProducts';
import {PriceSorter} from './PriceSorter';
import {Filter} from './Filter';

const teaList = (tea) => {

  const listItems = tea.map((product) =>
    <div className="boxed" key={product.name}>
      <img src={product.image} alt=''/><br/>
      {product.name}<br/>
      {product.currency} {product.price}<br/>
      <button className="addBasket" value="Add" onClick={ () => this.props.onClick(product.name, product.currency, product.price)}>Add To Cart </button>
      <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(product.name)}>Remove From Cart </button>
    </div>)

    return listItems;
}


export class Tea extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      products: [],
    };
  }

  componentDidMount(){

    const productList = allProductsList().products.filter(product =>  product.category === 'tea')
    this.setState({products : productList})
  }

  render() {

    return (
      <div>
        <div className="productboxed">
          <PriceSorter/>
          <h3 align="left" >Tea</h3>
          <Filter />
          {teaList(this.state.products)}
        </div>
      </div>
    );
  }
}
