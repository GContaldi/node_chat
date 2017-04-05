import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

import { initLocalStorage, updateLocalStorage, getStateFromLocalStorage } from '../../src/app/localStorage';
import { INITIAL_STATE } from '../../src/app/reducer';

chai.use(sinonChai);

describe('localStorage', () => {
  const getItemStub = sinon.stub(localStorage, 'getItem');
  const setItemStub = sinon.stub(localStorage, 'setItem');

  describe('initLocalStorage', () => {
    it('set the localStorage with the initial state', () => {
      getItemStub.returns(undefined);
      initLocalStorage();
      expect(setItemStub).to.have.been.calledWith('chatApp', JSON.stringify(INITIAL_STATE));
    });
  });

  describe('updateLocalStorage', () => {
    it('set the localStorage with the initial state', () => {
      const fakeState = { test: 1 };
      updateLocalStorage(fakeState);
      expect(setItemStub).to.have.been.calledWith('chatApp', JSON.stringify(fakeState));
    });
  });

  describe('getStateFromLocalStorage', () => {
    it('set the localStorage with the initial state', () => {
      const fakeState = { test: 1 };
      getItemStub.returns(JSON.stringify(fakeState));
      expect(getStateFromLocalStorage()).to.eql(fakeState);
    });
  });
});
