const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const SEND_MESSAGE = 'server/SEND_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';

const updateMessage = (messageText) => {
  return { type: UPDATE_MESSAGE, messageText };
};

const sendMessage = (messageText) => {
  return { type: SEND_MESSAGE, messageText };
};

const addMessage = (message) => {
  return { type: ADD_MESSAGE, message };
};

module.exports = {
  UPDATE_MESSAGE,
  SEND_MESSAGE,
  ADD_MESSAGE,
  updateMessage,
  sendMessage,
  addMessage
};
