import { from, of } from 'rxjs'
import {
  switchMap, tap, catchError,
} from 'rxjs/operators'
import { PRODUCTS_GET_ALL } from '../actionTypes'
import { actionProductsGetAllF, actionProductsGetAllR } from '../actions/productsActions'
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

export default {
  productsGetAllEpic,
}
