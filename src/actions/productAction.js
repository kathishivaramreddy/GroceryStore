import {FETCH_PRODUCTS} from './types'
import store from '../store';
import {sorting,sortByPrice} from '../Components/PriceSorter/PriceUtil';

export const fetchProducts = (sort) => dispatch => {

    return fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then(data => {

      let {products} = data

      if(sort.length>0){
        products= sortByPrice(sort,products)
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
