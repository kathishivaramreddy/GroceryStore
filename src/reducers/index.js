import {combineReducers } from 'redux';
import productsReducer from './productsReducer';
import sortReducer from './sortReducer';
import filterReducer from './filterReducer';
import searchReducer from './searchReducer'

export default combineReducers({

    products:productsReducer,
    sortBy : sortReducer,
    filterBy : filterReducer,
    searchBy : searchReducer

  });
