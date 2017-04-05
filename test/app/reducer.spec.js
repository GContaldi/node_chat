import { expect } from 'chai';
import { updateMessage, addMessage, sendMessage, setUsername } from '../../src/app/actions';
import reducer from '../../src/app/reducer';

describe('reducer', () => {
  const INITIAL_STATE = {
    username: null,
    messages: [],
    newMessage: ''
  };

  describe('when state is undefined', () => {
    it('return the initial state', () => {
      expect(reducer()).to.eql(INITIAL_STATE);
    });
  });

  describe('when updating the message', () => {
    it('updates the newMessage key with the passed message', () => {
      const TEXT = 'new message';
      const actionPayload = updateMessage(TEXT);
      const newState = reducer(INITIAL_STATE, actionPayload);
      expect(newState.newMessage).to.eql(TEXT);
    });
  });

  describe('when adding a new message', () => {
    it('adds the new message in the list of messages', () => {
      const MESSAGE = { username: 'me', text: 'new message' };
      const actionPayload = addMessage(MESSAGE);
      expect(reducer(INITIAL_STATE, actionPayload).messages).to.eql([MESSAGE]);
    });
  });

  describe('when sending a new message', () => {
    it('reset the newMessage state', () => {
      const TEXT = 'new message';
      INITIAL_STATE.newMessage = TEXT;
      const actionPayload = sendMessage(TEXT);
      expect(reducer(INITIAL_STATE, actionPayload).newMessage).to.eql('');
    });
  });

  describe('when setting the username', () => {
    it('sets the username into the store', () => {
      const actionPayload = setUsername('testUsername');
      expect(reducer(INITIAL_STATE, actionPayload).username).to.eql('testUsername');
    });
  });
});
