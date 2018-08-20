const products = (state = { productsList: [], productsPriceById: {} }, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_FULFILLED':
      const productsArr = action.payload;
      const productsPriceById = {};
      productsArr.forEach((elem) => {
        const id = elem.id;
        const price = elem.price;
        productsPriceById[id] = price;
      });
      return { productsList: productsArr, productsPriceById };
    default:
      return state;
  }
};

export default products;
