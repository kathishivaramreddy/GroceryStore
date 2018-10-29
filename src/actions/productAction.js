import {FETCH_PRODUCTS} from './types'
import store from '../store';
import {sorting,sortByPrice} from '../Components/PriceSorter/PriceUtil';
import {searchProduct} from '../Components/Search/SearchUtil';
import {filterByPrice,filterByCategory} from '../Components/Filter/FilterUtil';
import isEmpty from 'lodash/isEmpty';

export const fetchProducts = (sort,search,filterPrice,filterCategory) => dispatch => {

    return fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then(data => {

      let {products} = data

      if(sort.length>0){
        products= sortByPrice(sort,products)
      }

      if(search.length>0){
        products=searchProduct(search,products)
      }

      if(!isEmpty(filterPrice)){
        products=filterByPrice(filterPrice,products)
      }

      if(!isEmpty(filterCategory)){
        products=filterByCategory(filterCategory,products)
      }
      return dispatch (
        {
        type:FETCH_PRODUCTS,
        payload:products
        }
      )

      }
    )
}
