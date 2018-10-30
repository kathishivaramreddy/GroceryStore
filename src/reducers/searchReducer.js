import {SEARCH} from '../actions/types';

const initialState = {
  search : ""
}

export default function(state=initialState,action){

  switch(action.type){

    case SEARCH :
      return {
        ...state,
        search :action.payload
      }

    default:
      return state
  }

}
