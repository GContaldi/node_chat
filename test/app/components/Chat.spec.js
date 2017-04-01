import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import Chat from '../../../src/app/components/Chat';

describe('Chat', () => {
  let component;

  before(() => {
    component = shallow(<Chat />);
  });

  it('renders a span', () => {
    expect(component.find('span')).to.have.lengthOf(1);
  });
});
