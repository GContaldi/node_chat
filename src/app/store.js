import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import reducer from './reducer';
import { initLocalStorage, updateLocalStorage, getStateFromLocalStorage } from './localStorage';

const socket = io();
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

initLocalStorage();

const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer, getStateFromLocalStorage());

store.subscribe(() => {
  updateLocalStorage(store.getState());
});

export default store;
