import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import fakeStore from '../../helpers/fakeStore';

import { INITIAL_STATE } from '../../../src/app/reducer';
import Sidebar from '../../../src/app/containers/Sidebar';

describe('Sidebar', () => {
  let sidebarNode;
  const MESSAGES = [
    { username: '1', text: 'a' },
    { username: '2', text: 'b' },
    { username: '1', text: 'c' }
  ];

  before(() => {
    const state = Object.assign({}, INITIAL_STATE, { messages: MESSAGES });
    const store = fakeStore(state);
    const wrapper = mount(<Provider store={store}><Sidebar /></Provider>);
    sidebarNode = wrapper.find('[data-component="Sidebar"]');
  });

  describe('when renders', () => {
    it('renders the right amount of Message components', () => {
      const uniqueUsers = 2;
      expect(sidebarNode.find('li')).to.have.lengthOf(uniqueUsers);
    });
  });
});
