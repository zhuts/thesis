// const mockData = {
//   searchParam: '',
//   currentCard: '',
//   currentDeck: [{ 
//     id:0,
//     cardType: 'yelp',
//     cardTitle: '',
//     cardPic: 'url',
//     liked: false,
//     votedOn: false
//   }]
// };

// const yelpMockData = {};

// buildDeck action will first empty currentDeck,
// then adds new cards per deck based on yelp data (mvp)

export const searchTerm = (term) => {
  return {
    type: 'SEARCH_TERM',
    term
  };
};

export const searchLocation = (location) => {
  return {
    type: 'SEARCH_LOCATION',
    location
  };
};

export const buildDeck = (yelpData) => {
  return {
    type: 'BUILD_DECK',
    yelpData
  };
};

// this action will increment currentCard by 1 until it hits currentDeck.length
// when it hits currentDeck.length, switch to results page

export const changeCard = (id) => {
  return {
    type: 'CHANGE_CARD',
    id
  }
}

// toggleLike will search currentDeck, find matching id and will toggle like 
// and it will also toggle votedOn to true

export const toggleLike = (id, liked) => {
  return {
    type: 'TOGGLE_LIKE',
    id,
    liked
  }
}


