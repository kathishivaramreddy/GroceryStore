import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

const initialState = {
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

store.subscribe( () => {
  console.log("storeState ",store.getState())
})

// store.dispatch({type:'INC',payload:1})
export default store;
