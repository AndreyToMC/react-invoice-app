const products = (state = [], action) => {
  switch (action.type) {
      case 'GET_PRODUCTS_FULFILLED':
      console.log(action.payload)
      const products = action.payload
        return [...products ]
      default:
        return state
      }
}

export default products;
