import React from 'react';
import concat from 'lodash/concat';
import isEmpty from 'lodash/isEmpty';
import some from 'lodash/some';

export const addToFilter = (items, value) => {
  return concat(items, value);
};
export const addToFilterCategory = (items, value) => {
  return concat(items, value);
};

export const removeFromFilter = (items, value) =>{
  return items.filter((item) =>
    item.min !== value.min && item.max !== value.max);
};

export const removeFromFilterPrice = (items, value) =>{
  return items.filter((item) =>
    item.min !== value.min && item.max !== value.max);
};

export const removeFromFilterCategory = (items, value) =>{
  return items.filter((item) => item.category !== value.category);
};

export const setFilterValue = (name) => {
  const checkboxData = {
    price1: {min: 1, max: 100},
    price2: {min: 101, max: 200},
    price3: {min: 201, max: 1000}
  };

  if (name === 'price1') {
    return checkboxData.price1;
  } else if (name ==='price2') {
    return checkboxData.price2;
  } else {
    return checkboxData.price3;
  }
};

export const setCategoryValue = (name) => {
  const checkboxData = {category: name};
  return checkboxData;
};

export function applyCategoryFilter(searchItems, filterCategory) {
  return searchItems.filter(product => {
    return some(filterCategory, (filterToCheck) => product.category === filterToCheck.category);
  });
}

export function applyPriceFilter(itemsAfterCategoryFilter, filterPrice) {
  return itemsAfterCategoryFilter.filter((product) =>
    some(filterPrice, function (filter) {
        if (product.price > filter.min && product.price < filter.max) {
          return true;
        }
        return false;
      }
    )
  )
}
export function filterByPrice(filterPrice,products){
  return products.filter((product) =>
    some(filterPrice, function (filter) {
        if (product.price > filter.min && product.price < filter.max) {
          return true;
        }
        return false;
      }
    )
  )
}

export function filterByCategory(filterCategory,products){
  return products.filter(product => {
    return some(filterCategory, (filterToCheck) => product.category === filterToCheck.category);
  });
}

export const getFilteredList = (products, filterCategory, filterPrice,onAdd,onRemove) => {
  return products.filter( (product) => {
    if (isEmpty(filterCategory)) {
      return true;
    } else {
        return some(filterCategory, (filterToCheck) => product.category === filterToCheck.category);
    }
  })
      .filter( (product) =>
        some(filterPrice, function(filter) {
          if (product.price > filter.min && product.price < filter.max ) {
            return true;
          }
        }
        )
      )
      .map((product) =>
        <div className="boxed" key={product.name}>
          <img src={product.image} alt=''/><br/>
          {product.name}<br/>
          {product.currency} {product.price}<br/>
          <button className="addBasket" value="Add"
            onClick={ () => onAdd(product.name, product.currency,
            product.price, product.image)}>
          Add To Cart </button>
          <button className="addBasket" value="Remove From Cart"
            onClick={ () => onRemove(product.name)}>
          Remove From Cart </button>
        </div>
      );
};
