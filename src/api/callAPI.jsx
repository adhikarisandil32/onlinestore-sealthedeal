import axios from 'axios'

export function callAPI({dispatch, dispatchAction}) {

  const getProducts = async () => {
    await axios.get("https://fakestoreapi.com/products/")
      .then(response => {
        dispatch(dispatchAction(response.data))
      })
      .catch(err => {
        console.error(err.message)
      })
  }
  
  getProducts()
}
