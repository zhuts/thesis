export default (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_DECKS':
      return [
        ...action.userDecks
      ]
    default:
      return state
  }
};