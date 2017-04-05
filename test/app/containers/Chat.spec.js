import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import fakeStore from '../../helpers/fakeStore';

import { INITIAL_STATE } from '../../../src/app/reducer';
import Chat from '../../../src/app/containers/Chat';
import Message from '../../../src/app/components/Message';

describe('Chat', () => {
  let chatNode;
  const MESSAGES = [
    { username: '1', text: 'a' },
    { username: '2', text: 'b' }
  ];

  const currentUsername = '1';

  before(() => {
    const state = Object.assign({}, INITIAL_STATE, { username: currentUsername, messages: MESSAGES });
    const store = fakeStore(state);
    const wrapper = mount(<Provider store={store}><Chat /></Provider>);
    chatNode = wrapper.find('[data-component="Chat"]');
  });

  describe('when renders', () => {
    it('renders the right amount of Message components', () => {
      expect(chatNode.find(Message)).to.have.lengthOf(MESSAGES.length);
    });

    it('renders the Message components properly', () => {
      chatNode.find(Message).forEach((node, index) => {
        expect(node.prop('text')).to.equal(MESSAGES[index].text);
        expect(node.prop('username')).to.equal(MESSAGES[index].username);
        expect(node.prop('me')).to.equal(MESSAGES[index].username === currentUsername);
      });
    });
  });
});
