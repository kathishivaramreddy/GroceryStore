import searchReducer from './searchReducer';
import {SEARCH} from '../actions/types';

  const initialState = {
    search : ""
  }

  const action = {
    type:SEARCH,
    payload:'apple'
  }

describe('searchReducer',() => {

  it('should return initial state  ',() => {

    expect(searchReducer(undefined,{})).toEqual(
      {search : ""}
    )

  })

  it('should handle searching of products ',() => {

    expect(searchReducer(initialState,action)).toEqual({

          search:'apple'

    })

  })

})
