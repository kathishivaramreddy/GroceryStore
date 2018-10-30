import sortReducer from './sortReducer';
import {SORT} from '../actions/types';

const initialState = {
  sortProducts : ""
}
const action = {
  type:SORT,
  payload:"HIGH"
}

describe('sort reducer',() => {

  it('should return initialstate ', () => {

    expect(sortReducer(undefined,{})).toEqual({
        sortProducts:""
    })
  })

  it('should handle sorting of products ', () => {

    expect(sortReducer(initialState,action)).toEqual({

      sortProducts:"HIGH"
    })

  })
})
