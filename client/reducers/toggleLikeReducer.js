export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE':
      // if (state.currentDeck[state.currentCard].id === action.id) {
        state.currentDeck[state.currentCard].liked = action.liked;
      // }
      return state;
    default:
      return state;
  }
}