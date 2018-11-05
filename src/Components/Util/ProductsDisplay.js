import React from 'react';
export const productDisplay = (products, onAdd, onRemove) => {
  return products.map((product) =>
    <div className="boxed" key={product.name}>
      <img src={require(`../../images/${product.image}`)} alt={product.name}/><br/>
      {product.name}<br/>
      {product.currency} {product.price}<br/>
      <button className="addBasket" value="Add" onClick={ () => onAdd(product)}>Add To Cart </button>
      <button className="removeBasket" value="Remove From Cart" onClick={ () => onRemove(product)}>Remove From Cart </button>
    </div>);
};
