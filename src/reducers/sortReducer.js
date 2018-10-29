import {SORT} from '../actions/types'

const initialState = {
  sortProducts : ''
}

export default function(state=initialState,action) {
  console.log('in sort reducer',action.type)
  switch(action.type){

    case SORT :
      return {
        ...state,
        sortProducts:action.payload
      }

    default:
      return state
  }

}
