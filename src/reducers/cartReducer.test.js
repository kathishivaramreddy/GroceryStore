import {CART_ADD,CART_REMOVE} from '../actions/types';
import cartReducer from './cartReducer';

const state = {
  cartItems : []
}

const addaction = {
  type : CART_ADD,
  payload: {name:'apple'}
}

const removeaction = {

  type : CART_REMOVE,
  payload: {name:'apple'}

}

describe('cart reducer' , () => {

  it('should return initial state',() => {

      expect(cartReducer(undefined,{})).toEqual(
        {
          cartItems : []
        }
      )
  })

  it('should handle adding product to cart' , () => {

    expect(cartReducer(state,addaction)).toEqual(
      {
        cartItems : [{name:'apple',quantity:1}]
      })
      //check concatcart is called or not
  })

  it('should handle removing product to cart',() => {

    expect(cartReducer({
      cartItems:[{name:'apple',quantity:3}]
    },removeaction)).toEqual({
      cartItems : [{name:'apple',quantity:2}]
    })
    //check removefromcart has been called or not
  })

})
