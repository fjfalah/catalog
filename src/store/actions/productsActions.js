import {
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ALL_F,
  PRODUCTS_GET_ALL_R,
  PRODUCTS_GET_ALL_FILTER,
  PRODUCTS_GET_ALL_FILTER_F,
  PRODUCTS_GET_ALL_FILTER_R,
} from '../actionTypes'

export const actionProductsGetAll = () => ({
  type: PRODUCTS_GET_ALL,
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
