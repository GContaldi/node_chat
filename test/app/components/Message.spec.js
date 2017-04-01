import { expect } from 'chai';
import React from 'react';
import { render } from 'enzyme';

import Message from '../../../src/app/components/Message';

describe('Message', () => {
  const TEXT = 'this is my message for you!';
  const USERNAME = 'me';
  let component;

  before(() => {
    component = render(<Message username={USERNAME} text={TEXT} />);
  });

  describe('when renders', () => {
    it('renders the username', () => {
      expect(component.find('[data-element="username"]').text()).to.equal(`${USERNAME} wrote:`);
    });

    it('renders the username', () => {
      expect(component.find('[data-element="text"]').text()).to.equal(TEXT);
    });
  });
});
