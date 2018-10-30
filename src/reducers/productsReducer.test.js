import productsReducer from './productsReducer';

const initialState = {

  products:[]
}

const action = {
    type:'FETCH_PRODUCTS',
    payload:[{name:'apple'}]
  }



describe('product reducer',() => {

  it('should return initial state ',() => {

    expect(productsReducer(undefined,{})).toEqual({

      products:[]

    })

  })

  it('should handle FETCH_PRODUCTS ',() => {

    expect(productsReducer(initialState,
      action
    )
    ).toEqual(

      {
        products : [{name:'apple'}]
      } )

  })

})
