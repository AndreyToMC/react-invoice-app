const customers = (state = {customersList: [], customersNameById: {}}, action) => {
  switch (action.type) {
    case 'GET_CUSTOMERS_FULFILLED':
      const customers = action.payload;
      const customersNameById = {};
      customers.forEach(elem => {
        const id = elem.id
        const name = elem.name
        customersNameById[id] = name
      })
      return {customersList: customers, customersNameById};
    default:
      return state;
  }
};

export default customers;
