import {combineReducers } from 'redux';
import productsReducer from './productsReducer';
import sortReducer from './sortReducer';

export default combineReducers({

    products:productsReducer,
    sortBy : sortReducer
  });
