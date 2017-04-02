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

  const init = (newMessage) => {
    const store = fakeStore({ newMessage }, dispatch);
    const wrapper = mount(<Provider store={store}><Footer /></Provider>);
    footerNode = wrapper.find('[data-component="Footer"]');
  };

  before(init.bind(null, MESSAGE));

  describe('when renders', () => {
    it('renders an input text with the message', () => {
      expect(footerNode.find(INPUT_SELECTOR).prop('value')).to.eql(MESSAGE);
    });

    it('renders a button', () => {
      expect(footerNode.find(BUTTON_SELECTOR).text()).to.eql('Send');
    });
  });

  describe('when the button is clicked', () => {
    const clickButton = (message) => {
      dispatch.reset();
      init(message);
      footerNode.find(BUTTON_SELECTOR).simulate('click');
    };

    it('calls the dispatcher with the correct payload', () => {
      clickButton(MESSAGE);

      expect(dispatch).to.have.been.calledOnce;
      expect(dispatch).to.have.been.calledWith(sendMessage(MESSAGE));
    });

    describe('when the newMessage is empty', () => {
      it('the dispatcher is not called', () => {
        clickButton('');

        expect(dispatch).to.not.have.been.calledOnce;
      });
    });
  });

  describe('when the input is changed', () => {
    const changeInputWith = (value) => {
      dispatch.reset();
      footerNode.find(INPUT_SELECTOR).simulate('change', { target: { value } });
    };

    it('calls the dispatcher with the correct payload', () => {
      const TEXT = '  my text...  ';
      changeInputWith(TEXT);

      expect(dispatch).to.have.been.calledOnce;
      expect(dispatch).to.have.been.calledWith(updateMessage(TEXT.trim()));
    });

    describe('when the input value is empty', () => {
      it('the dispatcher is not called', () => {
        changeInputWith('');

        expect(dispatch).to.not.have.been.calledOnce;
      });
    });
  });
});
