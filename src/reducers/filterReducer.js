import {FILTER_PRICE,FILTER_CATEGORY} from '../actions/types';

const initialState = {
  filterByPrice:[],
  filterByCategory:[]
}

export default function(state=[],action) {

    switch(action.type){
      case FILTER_PRICE:
        return  Object.assign({}, state, {
        filterByPrice: [
          ...state.filterByPrice,
          {
            text: action.payload,
          }
        ]
      })
      case FILTER_CATEGORY:
        return {
          ...state,
          filterByCategory: action.payload
        }
      default:
        return state;
      }

}
