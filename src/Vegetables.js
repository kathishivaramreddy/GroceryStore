import React from 'react';
import allProductsList from './AllProducts'

const vegetableList = (vegetables) => {

  const listItems = vegetables.map((product) =>
    <div className="boxed" key={product.name}>
      <img src={product.image} alt=''/><br/>
      {product.name}<br/>
      {product.currency} {product.price}<br/>
      <button className="addBasket" value="Add" onClick={ () => this.props.onClick(product.name, product.currency, product.price)}>Add To Cart </button>
      <button className="addBasket" value="Remove From Cart" onClick={ () => this.props.onRemove(product.name)}>Remove From Cart </button>
    </div>)

    return listItems;
}

export class Vegetables extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      products: [],
    };
  }
  componentDidMount(){

    const productList = allProductsList().products.filter( product =>  product.category === 'vegetables')

    this.setState({products : productList})

  }

  render() {

    return (
      <div>
        <div className="productboxed">
          <h3 align="left" >Organic Vegetables</h3>
          {vegetableList(this.state.products)}
        </div>
      </div>
    );

  }
}
