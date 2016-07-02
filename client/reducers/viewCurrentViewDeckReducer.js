export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_VIEW_DECK':
      return action.currentViewDeck;
    default:
      return state
  }
};