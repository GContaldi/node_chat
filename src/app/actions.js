export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const updateMessage = (message) => {
  return { type: UPDATE_MESSAGE, message };
};

export const addMessage = () => {
  return { type: ADD_MESSAGE };
};
