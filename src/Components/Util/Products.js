
import React from 'react';

export class Products extends React.Component{

  render(){
  return(
     this.props.products.map((product) =>
    <div className="boxed" key={product.name}>
      <img src={require(`../../images/${product.image}`)} alt={product.name}/><br/>
      {product.name}<br/>
      {product.currency} {product.price}<br/>
      <button className="addBasket" value="Add" onClick={ () => this.props.addCartAction(product)}>Add To Cart </button>
      <button className="removeBasket" value="Remove From Cart" onClick={ () => this.props.removeCartAction(product)}>Remove From Cart </button>
    </div>)
  );
}
};
