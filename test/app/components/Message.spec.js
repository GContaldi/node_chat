import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import Message from '../../../src/app/components/Message';
import Avatar from '../../../src/app/components/Avatar';

describe('Message', () => {
  const TEXT = 'this is my message for you!';
  const USERNAME = 'me';
  let component;

  before(() => {
    component = shallow(<Message username={USERNAME} text={TEXT} />);
  });

  describe('when renders', () => {
    it('renders the avatar', () => {
      expect(component.find(Avatar)).to.have.lengthOf(1);
    });

    it('renders the text', () => {
      expect(component.find('[data-element="text"]').text()).to.equal(TEXT);
    });
  });

  describe('when message is send by myself', () => {
    before(() => {
      component = shallow(<Message username={USERNAME} text={TEXT} me />);
    });

    it('should style properly', () => {
      expect(component.find('.message--me')).to.have.lengthOf(1);
    });
  });

  describe('when message is send by other users', () => {
    before(() => {
      component = shallow(<Message username={USERNAME} text={TEXT} me={false} />);
    });

    it('should style properly', () => {
      expect(component.find('.message--others')).to.have.lengthOf(1);
    });
  });
});
