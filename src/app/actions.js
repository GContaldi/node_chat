export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const SEND_MESSAGE = 'server/SEND_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const updateMessage = (message) => {
  return { type: UPDATE_MESSAGE, message };
};

export const sendMessage = (message) => {
  return { type: SEND_MESSAGE, message };
};

export const addMessage = (message) => {
  return { type: ADD_MESSAGE, message };
};
