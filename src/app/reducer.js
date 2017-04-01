import { UPDATE_MESSAGE, ADD_MESSAGE } from './actions';

const INITIAL_STATE = {
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
      return updateState(state, { newMessage: action.message });
    case ADD_MESSAGE:
      return updateState(state, {
        messages: state.messages.concat([state.newMessage]),
        newMessage: ''
      });
    default:
      return state;
  }
};

export default reducer;
