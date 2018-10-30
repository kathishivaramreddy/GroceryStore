import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import {SEARCH} from './types'
import {searchAction} from './searchAction'


describe('search Action',() => {

  it('should dispatch search action ', () => {
    const store = mockStore({
      search:"",

    })
    const expectedActions = [{
      type:SEARCH,
      payload:"apple"
    }]
    store.dispatch(searchAction('apple'))
    expect(store.getActions()).toEqual(expectedActions)
  })

})
