import {FILTER_PRICE} from './types'

export const filterPriceAction = (filter) => dispatch => {

  dispatch({
    type:FILTER_PRICE,
    payload:filter
  })

}
