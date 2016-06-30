export default (state = true, action) => {
  switch (action.type) {
    case 'DONE_LOADING':
      return false;
    default:
      return state;
  }
};
