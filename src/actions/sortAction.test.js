import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import {SORT} from './types';
import {sortProducts} from './sortAction';

describe('actions', () => {

  it('should create actions which sorts items ',() => {

    const expectedAction = [{
        type:SORT,
        payload:"HIGH"
    }]
    const store = mockStore({sort:""})
    store.dispatch(sortProducts("HIGH"))
    expect(store.getActions()).toEqual(expectedAction)
  })

})
