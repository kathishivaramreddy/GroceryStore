import {FETCH_PRODUCTS} from './types'
export const fetchProducts = () => dispatch => {

    return fetch('http://localhost:8080/products')
    .then(res => res.json)
    .then(json =>
      dispatch (
        {
        type:FETCH_PRODUCTS,
        payload:json.products}
      )
    )
}
