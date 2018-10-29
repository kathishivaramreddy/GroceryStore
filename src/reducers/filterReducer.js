import {FILTER_PRICE,FILTER_CATEGORY,FILTER_PRICE_REMOVER} from '../actions/types';
import {removeFromFilter} from '../Components/Filter/FilterUtil'
const initialState = {

  filterByPrice:[]

}

export default function(state=initialState,action) {
    console.log(state.filterByPrice,'filterReducer')
    switch(action.type){
      case FILTER_PRICE:
        return  {
          ...state,
          filterByPrice:[...state.filterByPrice,action.payload]
        }
      case FILTER_PRICE_REMOVER:
        return {
          ...state,
          filterByPrice:removeFromFilter(state.filterByPrice,action.payload)}
      // case FILTER_CATEGORY:
      //   return {
      //     ...state,
      //     // filterByCategory: action.payload
      //   }
      default:
        return state;
      }

}
