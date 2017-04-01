import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../../src/app/components/Footer';

describe('Footer', () => {
  let footerNode;
  const noop = () => {};
  const renderComponent = (onButtonClick, onInputChange) => {
    const component = shallow(<Footer onButtonClick={onButtonClick} onInputChange={onInputChange} />);
    return component.find('[data-component="Footer"]');
  };

  describe('when renders', () => {
    before(() => {
      footerNode = renderComponent(noop, noop);
    });

    it('renders an input text', () => {
      expect(footerNode.find('input')).to.have.lengthOf(1);
    });

    it('renders a button', () => {
      expect(footerNode.find('button')).to.have.lengthOf(1);
    });
  });

  describe('when the button is clicked', () => {
    it('the onButtonClick function gets called', (done) => {
      footerNode = renderComponent(done, noop);
      footerNode.find('button').simulate('click');
    });
  });

  describe('when the input is changed', () => {
    it('the onInputChange function gets called', (done) => {
      const TEXT = 'my text...';

      const testFn = (text) => {
        expect(text).to.be.equal(TEXT);
        done();
      };

      footerNode = renderComponent(noop, testFn);
      footerNode.find('input').simulate('change', {
        target: { value: TEXT }
      });
    });
  });
});
