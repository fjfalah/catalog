import { from, of } from 'rxjs'
import {
  switchMap, catchError,
} from 'rxjs/operators'
import { PRODUCTS_GET_ALL, PRODUCTS_GET_ALL_FILTER } from '../actionTypes'
import {
  actionProductsGetAllF,
  actionProductsGetAllR,
  actionProductsGetAllFilterF,
  actionProductsGetAllFilterR,
} from '../actions/productsActions'
import { productsServices } from '../../services'


const productsGetAllEpic = (action$) => {
  return action$.ofType(PRODUCTS_GET_ALL).pipe(
    switchMap(() => {
      return from(productsServices.getAllProducts()).pipe(
        switchMap((data) => of(actionProductsGetAllF(data))),
        catchError((err) => actionProductsGetAllR(err))
      )
    })
  )
}

const productsGetAllFilterEpic = (action$) => {
  return action$.ofType(PRODUCTS_GET_ALL_FILTER).pipe(
    switchMap(() => {
      return from(productsServices.getAllFilterProducts()).pipe(
        switchMap((data) => of(actionProductsGetAllFilterF(data))),
        catchError((err) => actionProductsGetAllFilterR(err))
      )
    })
  )
}

export default {
  productsGetAllEpic,
  productsGetAllFilterEpic,
}
