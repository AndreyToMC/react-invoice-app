import { ActionTypes } from '../actions';

const errors = (state = '', action) => {
  switch (action.type) {
    case ActionTypes.ERROR_ACTION:
      const error = action.payload
      return error
    default:
      return state;
  }
};

export default errors;
