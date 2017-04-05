import { INITIAL_STATE } from './reducer';

const LOCAL_STORAGE_ITEM = 'chatApp';

export const updateLocalStorage = (state) => {
  localStorage.setItem(LOCAL_STORAGE_ITEM, JSON.stringify(state));
};

export const getStateFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM));
};

export const initLocalStorage = () => {
  if (localStorage.getItem(LOCAL_STORAGE_ITEM) === undefined) {
    updateLocalStorage(INITIAL_STATE);
  }
};
