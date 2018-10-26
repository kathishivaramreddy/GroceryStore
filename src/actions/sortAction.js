import {SORT} from './types';

export const sortProducts = (sortBy) => dispatch => {

  return dispatch(
    {
    type:SORT,
    payload:sortBy
  });
}
