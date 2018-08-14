const customers = (state = [], action) => {
  switch (action.type) {
      case 'GET_CUSTOMERS_FULFILLED':
      console.log(action.payload)
      const customers = action.payload
        return [...customers ]
      default:
        return state
      }
}

export default customers;
