import {CART_ADD,CART_REMOVE} from './types'


export const addCartAction = (product) => dispatch => (

  dispatch({
    type:CART_ADD,
    payload:product
  })

)

export const removeCartAction = (product) => dispatch => (

  dispatch({
    type:CART_REMOVE,
    payload:product
  })

)
