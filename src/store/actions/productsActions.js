import {
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ALL_F,
  PRODUCTS_GET_ALL_R,
  PRODUCTS_GET_ALL_FILTER,
  PRODUCTS_GET_ALL_FILTER_F,
  PRODUCTS_GET_ALL_FILTER_R,
  PRODUCTS_SET_FILTER,
  PRODUCTS_SET_ORDER,
  PRODUCTS_RESET_FILTER,
} from '../actionTypes'

export const actionProductsGetAll = (filters, orders) => ({
  type: PRODUCTS_GET_ALL,
  payload: {
    filters,
    orders,
  },
})

export const actionProductsGetAllF = (data) => ({
  type: PRODUCTS_GET_ALL_F,
  payload: data,
})

export const actionProductsGetAllR = (error) => ({
  type: PRODUCTS_GET_ALL_R,
  payload: error,
})

export const actionProductsGetAllFilter = () => ({
  type: PRODUCTS_GET_ALL_FILTER,
})

export const actionProductsGetAllFilterF = (data) => ({
  type: PRODUCTS_GET_ALL_FILTER_F,
  payload: data,
})

export const actionProductsGetAllFilterR = (error) => ({
  type: PRODUCTS_GET_ALL_FILTER_R,
  payload: error,
})

export const actionProductsSetFilter = (data) => ({
  type: PRODUCTS_SET_FILTER,
  payload: data,
})

export const actionProductsSetOrder = (data) => ({
  type: PRODUCTS_SET_ORDER,
  payload: data,
})

export const actionProductsResetFilter = () => ({
  type: PRODUCTS_RESET_FILTER,
})
