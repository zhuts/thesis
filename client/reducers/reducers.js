export const searchTermReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return action.searchTerm;
    default:
      return state;
  }
};

export const searchLocationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.searchLocation;
    default:
      return state;
  }
};

export const buildDeckReducer = (state = [], action) => {
  switch (action.type) {
    case 'BUILD_DECK':
      return [
        ...state,
        ...action.yelpData
      ];
    default:
      return state;
  }
};

