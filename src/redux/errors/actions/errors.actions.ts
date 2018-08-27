export const ActionTypes = {
  ERROR_ACTION: 'ERROR',
};

export const newErrorToStore = (error) => ({ type: 'ERROR', payload: error });
