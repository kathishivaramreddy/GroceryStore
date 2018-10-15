import isNil from 'lodash/isNil';
import merge from 'lodash/merge';
import concat from 'lodash/concat';

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
