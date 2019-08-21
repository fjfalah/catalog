import { from, of, concat } from 'rxjs'
import {
  switchMap, catchError,
} from 'rxjs/operators'
import { PRODUCTS_GET_ALL, PRODUCTS_GET_ALL_FILTER } from '../actionTypes'
import {
  actionProductsGetAllF,
  actionProductsGetAllR,
  actionProductsGetAllFilterF,
  actionProductsGetAllFilterR,
  actionProductsSetFilter,
  actionProductsSetOrder,
} from '../actions/productsActions'
import { productsServices } from '../../services'


const productsGetAllEpic = (action$) => {
  return action$.ofType(PRODUCTS_GET_ALL).pipe(
    switchMap((action) => {
      const { filters, orders } = action.payload
      return from(productsServices.getAllProducts(filters, orders)).pipe(
        switchMap((data) => concat(
          of(actionProductsGetAllF(data)),
          of(actionProductsSetFilter(filters)),
          of(actionProductsSetOrder(orders)),
        )),
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
