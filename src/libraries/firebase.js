import app from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyATzzIw82nUm3TUkz3BM6bmr54badsXEGo',
  authDomain: 'sr-d455d.firebaseapp.com',
  databaseURL: 'https://sr-d455d.firebaseio.com/',
  projectId: 'sr-d455d',
  storageBucket: 'sr-d455d.appspot.com',
  messagingSenderId: '248304482687',
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
