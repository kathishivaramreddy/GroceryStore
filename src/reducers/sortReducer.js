import {SORT} from '../actions/types'

const initialState = {
  sort : ''
}

export default function(state=initialState,action) {
  console.log('in sort reducer',action.type)
  switch(action.type){

    case SORT :
      return {
        ...state,
        sort:action.payload
      }

    default:
      return state
  }

}
