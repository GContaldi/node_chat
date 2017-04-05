import { expect } from 'chai';
import React from 'react';
import { render } from 'enzyme';

import Avatar from '../../../src/app/components/Avatar';

describe('Avatar', () => {
  const USERNAME = 'me';
  let component;

  before(() => {
    component = render(<Avatar username={USERNAME} />);
  });

  describe('when renders', () => {
    it('renders the username', () => {
      expect(component.find('[data-component="Avatar"]').text()).to.equal(USERNAME.substr(0, 1));
    });
  });
});
