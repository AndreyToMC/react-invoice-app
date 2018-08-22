const errors = (state = '', action) => {
  switch (action.type) {
    case 'ERROR':
      const error = action.payload
      return error
    default:
      return state;
  }
};

export default errors;
