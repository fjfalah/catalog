import { firebase } from '../libraries'

const getAllProducts = () => {
  return firebase.request({
    collection: 'products',
  })
    .get()
    .then((querySnapshot) => querySnapshot.docs.map((doc) => doc.data()))
}

export default {
  getAllProducts,
}
