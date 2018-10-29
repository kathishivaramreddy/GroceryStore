import {FETCH_PRODUCTS} from './types'
import store from '../store';
import {sorting,sortByPrice} from '../Components/PriceSorter/PriceUtil';
import {searchProduct} from '../Components/Search/SearchUtil';
import {filterByPrice} from '../Components/Filter/FilterUtil';
import isEmpty from 'lodash/isEmpty';

export const fetchProducts = (sort,search,filter) => dispatch => {

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

      if(!isEmpty(filter)){
        products=filterByPrice(filter,products)
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
