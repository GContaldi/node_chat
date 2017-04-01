export default (state = {}, dispatch = () => {}) => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch,
    getState: () => state
  };
};
