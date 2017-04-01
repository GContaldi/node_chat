import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import fakeStore from '../../helpers/fakeStore';

import { updateMessage, addMessage } from '../../../src/app/actions';
import Footer from '../../../src/app/containers/Footer';

chai.use(sinonChai);

describe('Footer', () => {
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
      expect(footerNode.find('input').prop('value')).to.eql(MESSAGE);
    });

    it('renders a button', () => {
      expect(footerNode.find('button').text()).to.eql('Send');
    });
  });

  describe('when the button is clicked', () => {
    it('calls the dispatcher the correct payload', () => {
      dispatch.reset();
      footerNode.find('button').simulate('click');
      expect(dispatch).to.have.been.calledOnce;
      expect(dispatch).to.have.been.calledWith(addMessage());
    });
  });

  describe('when the input is changed', () => {
    it('the onInputChange function gets called', () => {
      dispatch.reset();
      const TEXT = 'my text...';

      footerNode.find('input').simulate('change', {
        target: { value: TEXT }
      });

      expect(dispatch).to.have.been.calledOnce;
      expect(dispatch).to.have.been.calledWith(updateMessage(TEXT));
    });
  });
});
