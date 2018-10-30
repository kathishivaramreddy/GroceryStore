import {FILTER_PRICE,FILTER_CATEGORY,
  FILTER_PRICE_REMOVER,FILTER_CATEGORY_REMOVER} from '../actions/types';
import {removeFromFilterPrice,removeFromFilterCategory} from '../Components/Filter/FilterUtil'

const initialState = {
  filterByPrice:[],
  filterByCategory:[]
}

export default function(state=initialState,action) {
    
    switch(action.type){
      case FILTER_PRICE:
        return  {
          ...state,
          filterByPrice:[...state.filterByPrice,action.payload]
        }
      case FILTER_PRICE_REMOVER:
        return {
          ...state,
          filterByPrice:removeFromFilterPrice(state.filterByPrice,action.payload)
        }
      case FILTER_CATEGORY:
      return  {
        ...state,
        filterByCategory:[...state.filterByCategory,action.payload]
      }
      case FILTER_CATEGORY_REMOVER:
        return {
          ...state,
          filterByCategory:removeFromFilterCategory(state.filterByCategory,action.payload)
        }
      default:
        return state;
      }

}
