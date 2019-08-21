import { firebase } from '../libraries'

const getAllProducts = (filters, orders) => {
  return firebase.request({
    collection: 'products',
    filters,
    orders,
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
