import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import {FETCH_PRODUCTS} from './types';
import {fetchProducts} from './productAction';


describe('product actions' , () => {

  

})
