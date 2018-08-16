const products = (state = {productsList: [], productsPriceById: {}}, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_FULFILLED':
      const products = action.payload;
      const productsPriceById = {};
      products.forEach(elem => {
        console.log(elem.id)
        const id = elem.id
        const price = elem.price
        productsPriceById[id] = price
      })
      return {productsList: products, productsPriceById};
    default:
      return state;
  }
};

export default products;
