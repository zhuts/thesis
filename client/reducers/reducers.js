// export const searchTermReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'SET_SEARCH_TERM':
//       return action.searchTerm;
//     default:
//       return state;
//   }
// };

// export const searchLocationReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'SET_LOCATION':
//       return action.searchLocation;
//     default:
//       return state;
//   }
// };

// export const buildDeckReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'BUILD_DECK':
//       return [
//         ...state,
//         ...action.yelpData
//       ];
//     default:
//       return state;
//   }
// };

const mockData = {
  searchParam: '',
  currentCard: 0,
  currentDeck: [{ 
    id: 0,
    cardType: 'yelp',
    cardTitle: '',
    cardPic: 'url',
    liked: false,
    votedOn: false
  }]
};

export const changeCardReducer = (state = mockData, action) => {
  switch (action.type) {
    case 'CHANGE_CARD':
      state.currentCard++;
      return state;
    default:
      return state;
  }
}

export const toggleLikeReducer = (state = mockData, action) => {
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