import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {FETCH_PRODUCTS} from './types';
import {fetchProducts} from './productAction';
import fetchMock from 'fetch-mock';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('product actions' , () => {

  afterEach(() => {
      fetchMock.restore()
  })

  const middlewares = [thunk]
  const url='http://localhost:8080/products'

  it('should dispatch fetch products',() => {

    const store = mockStore({products:[]})

    fetchMock.getOnce('http://localhost:8080/products',{
      body:{products : [{name:'apple'},{name:'orange'}] },
      headers : { 'content-type': 'application/json' }
    })

    const expectedAction = [{
      type:FETCH_PRODUCTS,
      payload : [{name:'apple'},{name:'orange'}]
    }]

    store.dispatch(fetchProducts("","",[],{},url)).then(() => {
      expect(store.getActions()).toEqual(expectedAction)

    })

  })

  it('should dispatch filter products on search and dispatch action',() => {

    const store = mockStore({products:[]})
    fetchMock.getOnce('http://localhost:8080/products',{
      body:{products : [{name:'apple'},{name:'orange'}] },
      headers : { 'content-type': 'application/json' }
    })

    const expectedAction = [{
      type:FETCH_PRODUCTS,
      payload : [{name:'apple'}]
    }]

    store.dispatch(fetchProducts("","apple",[],{},url)).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })

  })

  it('should dispatch filter products on price filter and dispatch action',() => {

    const store = mockStore({products:[]})

    fetchMock.getOnce('http://localhost:8080/products',{
      body:{products : [{name:'apple',price:120},{name:'orange',price:95}] },
      headers : { 'content-type': 'application/json' }
    })

    const expectedAction = [{
      type:FETCH_PRODUCTS,
      payload : [{name:'apple',price:120}]
    }]

    store.dispatch(fetchProducts("","",[{min:101,max:200}],{},url)).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })

  it('should dispatch filter products on category filter and dispatch action',() => {

    const store = mockStore({products:[]})

    fetchMock.getOnce('http://localhost:8080/products',{
      body:{products : [{name:'apple',category:'fruits'},{name:'tomato',category:'vegetable'}] },
      headers : { 'content-type': 'application/json' }
    })

    const expectedAction = [{
      type:FETCH_PRODUCTS,
      payload : [{name:'apple',category:'fruits'}]
    }]

    store.dispatch(fetchProducts("","",[],[{category:'fruits'}],url)).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  })

})
