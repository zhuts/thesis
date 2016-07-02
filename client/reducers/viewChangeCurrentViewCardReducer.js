export default (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_VIEW_CARD':
      return state + 1;
    case 'RESET_CURRENT_VIEW_CARD':
      return 0;
    default:
      return state
  }
};