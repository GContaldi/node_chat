import { expect } from 'chai';
import React from 'react';
import { render } from 'enzyme';

import Message from '../../../src/app/components/Message';

describe('Message', () => {
  const TEXT = 'this is my message for you!';
  let component;

  before(() => {
    component = render(<Message text={TEXT} />);
  });

  describe('when renders', () => {
    it('renders a message', () => {
      expect(
        component.find('[data-component="Message"]').text()
      ).to.equal(TEXT);
    });
  });
});