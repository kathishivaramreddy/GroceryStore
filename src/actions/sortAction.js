import {SORT} from './types';

export const sortProducts = (sortBy) => dispatch => {

  dispatch({
    type:SORT,
    payload:sortBy
  });
}
