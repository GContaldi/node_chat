import { expect } from 'chai';
import { updateMessage, addMessage } from '../../src/app/actions';
import reducer from '../../src/app/reducer';

describe('reducer', () => {
  const INITIAL_STATE = {
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
      const TEXT = 'new message';
      const actionPayload = addMessage(TEXT);
      expect(reducer(INITIAL_STATE, actionPayload)).to.eql({
        messages: [TEXT],
        newMessage: ''
      });
    });
  });
});
