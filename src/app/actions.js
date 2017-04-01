export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const SEND_MESSAGE = 'server/SEND_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const updateMessage = (messageText) => {
  return { type: UPDATE_MESSAGE, messageText };
};

export const sendMessage = (messageText) => {
  return { type: SEND_MESSAGE, messageText };
};

export const addMessage = (message) => {
  return { type: ADD_MESSAGE, message };
};
