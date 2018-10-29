import {FILTER_PRICE,FILTER_PRICE_REMOVER
,FILTER_CATEGORY,FILTER_CATEGORY_REMOVER} from './types'

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

export const filterCategoryAction = (filter) => dispatch => {

  dispatch({
    type:FILTER_CATEGORY,
    payload:filter
  })

}

export const filterCategoryRemover = (filter) => dispatch => {

  dispatch({
    type:FILTER_CATEGORY_REMOVER,
    payload:filter
  })

}
