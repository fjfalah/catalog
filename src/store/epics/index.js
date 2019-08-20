import { combineEpics } from 'redux-observable'
import productsEpics from './productsEpics'

export default combineEpics(
  productsEpics.productsGetAllEpic,
  productsEpics.productsGetAllFilterEpic
)
