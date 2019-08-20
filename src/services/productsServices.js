import { firebase } from '../libraries'

const getAllProducts = () => {
  return firebase.request({
    collection: 'products',
  })
    .get()
    .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data()))
}

const getAllFilterProducts = () => {
  return firebase.request({
    collection: 'filter',
  })
    .get()
    .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data()))
}

export default {
  getAllProducts,
  getAllFilterProducts,
}
