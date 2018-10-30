import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
import {addCartAction,removeCartAction} from './cartAction'
import {CART_ADD,CART_REMOVE} from './types'

describe('cart actions ', () => {

  it('should dispatch add cart action',() => {

    const expectedActions = [{
      type:CART_ADD,
      payload:{name:'apple'}
    }]

    const store = mockStore({ cartItems: [] })

     store.dispatch(addCartAction({name:'apple'}))
     expect(store.getActions()).toEqual(expectedActions)

  })

  it('should dispatch remove cart action ' , () => {

    const expectedActions = [{
      type:CART_REMOVE,
      payload:{name:'apple'}
    }]

    const store = mockStore({ cartItems: [] })

     store.dispatch(removeCartAction({name:'apple'}))
     expect(store.getActions()).toEqual(expectedActions)

  })

})
