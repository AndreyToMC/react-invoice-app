const products = (state = { productsList: [], productsPriceById: {}, productsNameById: {} }, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_FULFILLED':
      console.log(action)
      const productsArr = action.payload;
      const productsPriceById = {};
      const productsNameById = {};
      productsArr.forEach((elem) => {
        const id = elem.id;
        const price = elem.price;
        productsPriceById[id] = price;
      });
      productsArr.forEach((elem) => {
        const id = elem.id;
        const name = elem.name;
        productsNameById[id] = name;
      });
      return { productsList: productsArr, productsPriceById, productsNameById };
    default:
      return state;
  }
};

export default products;
