import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import fakeStore from '../../helpers/fakeStore';

import Chat from '../../../src/app/containers/Chat';
import Message from '../../../src/app/components/Message';

describe('Chat', () => {
  let chatNode;
  const MESSAGES = ['a', 'b', 'c'];

  before(() => {
    const store = fakeStore({ messages: MESSAGES });
    const wrapper = mount(<Provider store={store}><Chat /></Provider>);
    chatNode = wrapper.find('[data-component="Chat"]');
  });

  describe('when renders', () => {
    it('renders the right amount of Message components', () => {
      expect(chatNode.find(Message)).to.have.lengthOf(MESSAGES.length);
    });

    it('renders the Message components properly', () => {
      chatNode.find(Message).forEach((node, index) => {
        expect(node.prop('text')).to.equal(MESSAGES[index]);
      });
    });
  });
});
