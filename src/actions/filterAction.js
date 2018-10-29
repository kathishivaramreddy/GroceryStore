import {FILTER_PRICE,FILTER_PRICE_REMOVER} from './types'

export const filterPriceAction = (filter) => dispatch => {

  dispatch({
    type:FILTER_PRICE,
    payload:filter
  })

}
export const filterPriceRemover = (filter) => dispatch => {

  dispatch({
    type:FILTER_PRICE_REMOVER,
    payload:filter
  })
}
