export default (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_CARD':
      // state.currentCard = action.currentCard;
      return state + 1
    default:
      return state;
  }
}