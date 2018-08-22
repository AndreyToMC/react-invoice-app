const customers = (state = { customersList: [], customersNameById: {} }, action) => {
  switch (action.type) {
    case 'GET_CUSTOMERS_FULFILLED':
      const customersArr = action.payload;
      const customersNameById = {};
      if (customersArr) {
        customersArr.forEach((elem) => {
          const id = elem.id;
          const name = elem.name;
          customersNameById[id] = name;
        });
      }
      return { customersList: customersArr, customersNameById };
    default:
      return state;
  }
};

export default customers;
