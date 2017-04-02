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

    describe('when the input is empty', () => {
      it('renders the button as disabled', () => {
        init('');
        expect(footerNode.find(BUTTON_SELECTOR).hasClass('btn-disabled')).to.equal(true);
      });
    });
  });

  describe('when the button is clicked', () => {
    const clickButton = (message) => {
      dispatch.reset();
      init(message);
      footerNode.find(BUTTON_SELECTOR).simulate('click');
    };

    it('calls the dispatcher with the correct payload, with the trimmed message', () => {
      clickButton(`  ${MESSAGE}  `);

      expect(dispatch).to.have.been.calledOnce;
      expect(dispatch).to.have.been.calledWith(sendMessage(MESSAGE));
    });

    describe('when the newMessage is empty', () => {
      before(clickButton.bind(null, ''));

      it('the dispatcher is not called', () => {
        expect(dispatch).to.not.have.been.calledOnce;
      });
    });
  });

  describe('when the input is changed', () => {
    before(init.bind(null, MESSAGE));

    it('calls the dispatcher with the correct payload', () => {
      const TEXT = 'my text...';
      dispatch.reset();
      footerNode.find(INPUT_SELECTOR).simulate('change', { target: { value: TEXT } });

      expect(dispatch).to.have.been.calledOnce;
      expect(dispatch).to.have.been.calledWith(updateMessage(TEXT));
    });
  });

  describe('when the user press the "enter" key', () => {
    before(init.bind(null, MESSAGE));

    it('calls the dispatcher with send action and payload', () => {
      const ENTER_KEY_CODE = 13;
      dispatch.reset();
      footerNode.find(INPUT_SELECTOR).simulate('keyPress', { which: ENTER_KEY_CODE });

      expect(dispatch).to.have.been.calledOnce;
      expect(dispatch).to.have.been.calledWith(sendMessage(MESSAGE));
    });
  });
});
