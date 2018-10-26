import {FETCH_PRODUCTS} from './types'
import store from '../store';
import sortBy from 'lodash/sortBy';


export const fetchProducts = (sort) => dispatch => {

    return fetch('http://localhost:8080/products')
    .then(res => res.json())
    .then(data => {

      let {products} = data

      if(sort.length>0){
        
        if(sort === 'LOW'){
          products = sortBy(products,function(product){
             return product.price
           })
       }
       else{
         products = sortBy(products,function(product){
            return product.price
          })
          products = products.reverse()
        }
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
