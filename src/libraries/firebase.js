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

export { db }
