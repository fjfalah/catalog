import {
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ALL_F,
  PRODUCTS_GET_ALL_R,
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
