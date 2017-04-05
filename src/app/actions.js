const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';
const SEND_MESSAGE = 'server/SEND_MESSAGE';
const SET_USERNAME = 'server/SET_USERNAME';

const updateMessage = (messageText) => {
  return { type: UPDATE_MESSAGE, messageText };
};

const sendMessage = (messageText) => {
  return { type: SEND_MESSAGE, messageText };
};

const addMessage = (message) => {
  return { type: ADD_MESSAGE, message };
};

const setUsername = (username) => {
  return { type: SET_USERNAME, username };
};

module.exports = {
  UPDATE_MESSAGE,
  ADD_MESSAGE,
  SEND_MESSAGE,
  SET_USERNAME,
  updateMessage,
  sendMessage,
  addMessage,
  setUsername
};
