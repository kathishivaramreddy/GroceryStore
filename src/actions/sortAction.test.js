import {SORT} from './types'
import {sortProducts} from './sortAction';

describe('actions', () => {

const sortBy = "HIGH"

  it('should create actions which sorts items ',() => {

    const expectedAction = {
        type:SORT,
        payload:sortBy
    }

    expect(sortProducts(sortBy)).toEqual(expectedAction)
  })

})
