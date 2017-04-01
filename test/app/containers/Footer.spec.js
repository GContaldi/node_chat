import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import fakeStore from '../../helpers/fakeStore';

import { updateMessage, sendMessage } from '../../../src/app/actions';
import Footer from '../../../src/app/containers/Footer';

chai.use(sinonChai);

describe('Footer', () => {
  const INPUT_SELECTOR = '[data-element="input"]';
  const BUTTON_SELECTOR = '[data-element="button"]';

  let footerNode;
  const MESSAGE = 'my message';
  const dispatch = sinon.spy();

  before(() => {
    const store = fakeStore({ newMessage: MESSAGE }, dispatch);
    const wrapper = mount(<Provider store={store}><Footer /></Provider>);
    footerNode = wrapper.find('[data-component="Footer"]');
  });

  describe('when renders', () => {
    it('renders an input text with the message', () => {
      expect(footerNode.find(INPUT_SELECTOR).prop('value')).to.eql(MESSAGE);
    });

    it('renders a button', () => {
      expect(footerNode.find(BUTTON_SELECTOR).text()).to.eql('Send');
    });
  });

  describe('when the button is clicked', () => {
    it('calls the dispatcher with the correct payload', () => {
      dispatch.reset();
      footerNode.find(BUTTON_SELECTOR).simulate('click');
      expect(dispatch).to.have.been.calledOnce;
      expect(dispatch).to.have.been.calledWith(sendMessage(MESSAGE));
    });
  });

  describe('when the input is changed', () => {
    it('calls the dispatcher with the correct patyload', () => {
      dispatch.reset();
      const TEXT = 'my text...';

      footerNode.find(INPUT_SELECTOR).simulate('change', {
        target: { value: TEXT }
      });

      expect(dispatch).to.have.been.calledOnce;
      expect(dispatch).to.have.been.calledWith(updateMessage(TEXT));
    });
  });
});
