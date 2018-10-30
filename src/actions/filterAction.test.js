import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import * as actions from './filterAction';
import {FILTER_PRICE,FILTER_PRICE_REMOVER
,FILTER_CATEGORY,FILTER_CATEGORY_REMOVER} from './types';


describe('filter actions',()=> {

  it('should dispatch action for filtering based on category' , () => {
    const store = mockStore({filterByPrice:[],
    filterByCategory:[]})

      const expectedActions = [{
        type:FILTER_CATEGORY,
        payload:{category:'fruits'}
      }]

      store.dispatch(actions.filterCategoryAction({category:'fruits'}))
      expect(store.getActions()).toEqual(expectedActions)

  })

  it('should dispatch action for filtering based on price' , () => {

    const store = mockStore({filterByPrice:[],
    filterByCategory:[]})

      const expectedActions = [{
        type:FILTER_PRICE,
        payload:{min:1,max:100}
      }]

      store.dispatch(actions.filterPriceAction({min:1,max:100}))
      expect(store.getActions()).toEqual(expectedActions)

  })

  it('should dispatch action for removing from price filter after unchecking filter' , () => {

    const store = mockStore({filterByPrice:[{min:1,max:100},{min:101,max:200}],
    filterByCategory:[]})

      const expectedActions = [{
        type:FILTER_PRICE_REMOVER,
        payload:{min:1,max:100}
      }]

      store.dispatch(actions.filterPriceRemover({min:1,max:100}))
      expect(store.getActions()).toEqual(expectedActions)
  })

  it('should dispatch action for removing from category filter after unchecking filter' , () => {

    const store = mockStore({filterByPrice:[],
    filterByCategory:[]})

      const expectedActions = [{
        type:FILTER_CATEGORY_REMOVER,
        payload:{category:'fruits'}
      }]

      store.dispatch(actions.filterCategoryRemover({category:'fruits'}))
      expect(store.getActions()).toEqual(expectedActions)
  })


})
