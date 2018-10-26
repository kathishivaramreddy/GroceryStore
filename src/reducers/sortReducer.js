import {SORT} from '../actions/types'

const initialState = {
  sortBy : ''
}

export default function(state=initialState,action) {
  console.log('in sort reducer',action.type)
  switch(action.type){

    case SORT :
      return {
        ...state,
        sortBy:action.payload
      }

    default:
      return state
  }

}
