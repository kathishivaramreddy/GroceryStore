import {FETCH_PRODUCTS} from './types'
import store from '../store';

export const fetchProducts = () => dispatch => {

    return fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then(data =>
      dispatch (
        {
        type:FETCH_PRODUCTS,
        payload:data.products
        }
      )
    )
}
