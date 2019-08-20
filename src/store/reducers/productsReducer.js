import {
  PRODUCTS_GET_ALL,
  PRODUCTS_GET_ALL_F,
  PRODUCTS_GET_ALL_R,
} from '../actionTypes'

const initialState = {
  isLoading: false,
  list: null,
  errorMessage: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
  case PRODUCTS_GET_ALL:
    return {
      ...state,
      isLoading: true,
    }
  case PRODUCTS_GET_ALL_F:
    return {
      ...state,
      isLoading: false,
      list: action.payload,
    }
  case PRODUCTS_GET_ALL_R:
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload,
    }

  default:
    return state
  }
}
