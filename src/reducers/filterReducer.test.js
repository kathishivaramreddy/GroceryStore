import {FILTER_PRICE,FILTER_CATEGORY,
  FILTER_PRICE_REMOVER,FILTER_CATEGORY_REMOVER} from '../actions/types';
import filterReducer from './filterReducer'

  const state = {
    filterByPrice:[],
    filterByCategory:[]
  }

  const priceAction = {
    type :FILTER_PRICE,
    payload:{min:1,max:100}
  }
  const categoryAction = {
    type:FILTER_CATEGORY,
    payload:{category:'fruits'}
  }
  const priceRemoveAction = {
    type :FILTER_PRICE_REMOVER,
    payload:{min:1,max:100}
  }
  const categoryRemoveAction = {
    type:FILTER_CATEGORY_REMOVER,
    payload:{category:'fruits'}
  }

describe('filter reducer' , () => {

  it('should return initial state ', () => {

    expect(filterReducer(undefined,{})).toEqual(
      state
    )

  })

  it('should handle price filter',() => {
    expect(filterReducer(state,priceAction)).toEqual({
      filterByPrice:[{min:1,max:100}],
      filterByCategory:[]
    })
  })

  it('should handle category filter',() => {
    expect(filterReducer(state,categoryAction)).toEqual({
      filterByPrice:[],
      filterByCategory:[{category:'fruits'}]
    })
  })

  it('should handle unchecking of price filter',() => {
      const state = {
        filterByPrice:[{min:1,max:100},{min:101,max:200}],
        filterByCategory:[]
      }
      expect(filterReducer(state,priceRemoveAction)).toEqual({

        filterByPrice:[{min:101,max:200}],
        filterByCategory:[]

      })
  })

  it('should handle unchecking of category filter',() => {
      const state = {
        filterByPrice:[],
        filterByCategory:[{category:'fruits'}]
      }
      expect(filterReducer(state,categoryRemoveAction)).toEqual({

        filterByPrice:[],
        filterByCategory:[]

      })
  })

})
