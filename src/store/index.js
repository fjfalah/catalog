import { createEpicMiddleware } from 'redux-observable'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import epics from './epics'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware()

const middlewares = []

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

const enhancer = process.env.NODE_ENV === 'production'
  ? applyMiddleware(epicMiddleware)
  : composeEnhancers(applyMiddleware(epicMiddleware, ...middlewares))

const configureStore = () => {
  const store = createStore(reducers, enhancer)
  epicMiddleware.run(epics)
  return store
}

export default configureStore()
