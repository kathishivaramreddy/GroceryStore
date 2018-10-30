import {SEARCH} from './types';

export const searchAction = (searchBy) => dispatch => (

  dispatch({
    type:SEARCH,
    payload:searchBy
  })

)
