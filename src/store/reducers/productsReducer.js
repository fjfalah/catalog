import {
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ALL_F,
  PRODUCTS_GET_ALL_R,
  PRODUCTS_GET_ALL_FILTER,
  PRODUCTS_GET_ALL_FILTER_R,
  PRODUCTS_GET_ALL_FILTER_F,
  PRODUCTS_SET_FILTER,
  PRODUCTS_SET_ORDER,
  PRODUCTS_RESET_FILTER,
} from '../actionTypes'

const initialState = {
  isLoading: false,
  list: null,
  filterList: null,
  errorMessage: '',
  setFilter: null,
  setOrder: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case PRODUCTS_GET_ALL:
  case PRODUCTS_GET_ALL_FILTER:
    return {
      ...state,
      isLoading: true,
      list: null,
      setFilter: null,
      setOrder: null,
    }
  case PRODUCTS_GET_ALL_F:
    return {
      ...state,
      isLoading: false,
      list: action.payload,
    }
  case PRODUCTS_GET_ALL_FILTER_F:
    return {
      ...state,
      isLoading: false,
      filterList: action.payload,
    }
  case PRODUCTS_SET_FILTER:
    return {
      ...state,
      setFilter: action.payload,
    }
  case PRODUCTS_SET_ORDER:
    return {
      ...state,
      setOrder: action.payload,
    }
  case PRODUCTS_RESET_FILTER:
    return {
      ...state,
      setFilter: null,
    }
  case PRODUCTS_GET_ALL_R:
  case PRODUCTS_GET_ALL_FILTER_R:
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload,
    }

  default:
    return state
  }
}
