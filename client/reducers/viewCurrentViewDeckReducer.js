const sortDeck = (deck) => {
  let sorted = deck.slice(0, deck.length);
  return sorted.sort( (a, b) => {
    return b.like - a.like;
  });
};

export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_VIEW_DECK':
      return action.currentViewDeck
    case 'SORT_CURRENT_VIEW_DECK':
      return {
        ...state,
        deck: sortDeck(state.deck)
      }
    default:
      return state
  }
};