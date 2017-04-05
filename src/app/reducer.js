import { UPDATE_MESSAGE, SEND_MESSAGE, ADD_MESSAGE, SET_USERNAME } from './actions';

const INITIAL_STATE = {
  username: null,
  messages: [],
  newMessage: ''
};

const updateState = (oldState, changes) => {
  return Object.assign({}, oldState, changes);
};

const reducer = (state, action) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case UPDATE_MESSAGE:
      return updateState(state, { newMessage: action.messageText });
    case SEND_MESSAGE:
      return updateState(state, { newMessage: '' });
    case SET_USERNAME:
      return updateState(state, { username: action.username });
    case ADD_MESSAGE:
      return updateState(state, {
        messages: state.messages.concat([action.message])
      });
    default:
      return state;
  }
};

export default reducer;
export { INITIAL_STATE };
