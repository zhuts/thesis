export default (state = [], action) => {
  switch (action.type) {
    case 'SET_SHARED_DECKS':
      return [
        ...action.sharedDecks
      ]
    default:
      return state
  }
};