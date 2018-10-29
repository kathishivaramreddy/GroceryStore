import {CART_ADD,CART_REMOVE} from '../actions/types';
import {addToCart,removeFromCart,concatCart} from '../Components/Cart/CartUtil';

const initialState = {
  cartItems : []
}

export default function(state=initialState,action){

  switch(action.type){

    case CART_ADD:
      return {
        ...state,
        cartItems:concatCart(state.cartItems,Object.assign({}, action.payload, {
        quantity: 1})
      )

      }

    case CART_REMOVE:
      return {
          ...state,
          // cartItems:removeFromCart(state.cartItems,action.payload)
      }

    default:
    return state;

  }
}
