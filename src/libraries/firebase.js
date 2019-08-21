import app from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBdbt1FofPiA_-k3XgzS1pv-wT7hr7kW9Q',
  authDomain: 'soracatalog.firebaseapp.com',
  databaseURL: 'https://soracatalog.firebaseio.com/',
  projectId: 'soracatalog',
  storageBucket: 'soracatalog.appspot.com',
  messagingSenderId: '966721257925',
}

app.initializeApp(config)

const db = app.firestore()

const request = ({ collection, filters, orders }) => {
  let collect = db.collection(collection)

  if (filters) {
    filters.map((filter) => {
      const { key, operator, value } = filter
      collect = collect.where(key, operator, value)
      return collect
    })
  }

  if (orders) {
    orders.map((order) => {
      const { key, operator, limit } = order

      if (limit) {
        collect = collect.orderBy(key, operator).limit(limit)
      }

      collect = collect.orderBy(key, operator)

      return collect
    })
  }

  return collect
}

export default {
  db,
  request,
}
