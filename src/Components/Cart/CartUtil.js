import React from 'react';
import isNil from 'lodash/isNil';
import merge from 'lodash/merge';
import concat from 'lodash/concat';
import sum from 'lodash/sum'
export const mergeProduct = (item, newItem) => {
  return merge(item, {quantity: item.quantity + newItem.quantity});
};

export const updateItems = (items, newItem) => {
  return items.map((item) => {
    return (item.name === newItem.name) ? mergeProduct(item, newItem) : item;
  });
};

export const concatCart = (items, newItem) => {
  const itemToBeUpdated = items.find((item) => {
    return item.name === newItem.name;
  });
  return isNil(itemToBeUpdated) ? concat(items, newItem) : updateItems(items, newItem);
};

export const updateDecreasedQuantity = (item, newItem) => {
  return merge(item, {quantity: item.quantity - newItem.quantity});
};

export const decreaseQuantity = (items, newItem) => {
  return items.map( (item) => {
    return (item.name === newItem.name ) ? updateDecreasedQuantity(item, newItem) : item;
  });
};

export const removeItemFromCart = (items, itemToBeDeleted) => {
  return items.filter( (item) => item.name !== itemToBeDeleted.name);
};

export const removefromCart = (items, newItem) => {
  const itemQuantityToBeUpdated = items.find( (item) => {
    return item.name === newItem.name && item.quantity > 1;
  });
  const itemToBeDeleted = items.find( (item) => {
    return item.name === newItem.name && item.quantity === 1;
  });

  if (itemQuantityToBeUpdated) {
    return decreaseQuantity(items, newItem);
  } else if (itemToBeDeleted) {
    return removeItemFromCart(items, itemToBeDeleted);
  } else {
    return items;
  }
};

export const displayCartItems = (cartItems ) => {
  return cartItems.map( items =>
    <div className="cartitems">
      <li className ="cart" key={items.name}>
        <img className ="cartImage" src={items.image} alt='product' /> <br/> {items.name} <br/> Cost:-{items.price} {items.currency} <br/>Quantity :- {items.quantity}
      </li>
    </div>)
}

export const totalAmountCalculator = (cartItems ) => {
  return  <div> <b> Total Charges:-</b>{sum(cartItems.map((product) =>
  product.price * product.quantity ))} INR </div>
}

export const buttonToClearCart = (clearCart) => {
  return <div> <h4>Cart</h4>
    <button className="clearCart" onClick={clearCart}>Clear Cart</button> </div>;
}
