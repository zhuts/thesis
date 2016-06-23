// const mockData = {
//   search: {
//     term: '',
//     location: ''
//   },
//   currentCard: 0,
//   currentDeck: [{ 
//     id: 0,
//     cardType: 'yelp',
//     cardTitle: '',
//     cardPic: 'url',
//     liked: false,
//     votedOn: false
//   }]
// };

export const searchReducer = (state = {term: '', location: ''}, action) => {
  switch (action.type) {
    case 'SEARCH_TERM': 
      return {
        ...state,
        term: action.term
      }
    case 'SEARCH_LOCATION':
      return {
        ...state,
        location: action.location
      }
    default:
      return state;
  }
};

export const buildDeckReducer = (state = [], action) => {
  switch (action.type) {
    case 'BUILD_DECK':
      return [
        ...action.yelpData
      ]
    default:
      return state;
  }
};


export const changeCardReducer = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_CARD':
      state.currentCard++;
      return state;
    default:
      return state;
  }
}

export const toggleLikeReducer = (state = false, action) => {
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