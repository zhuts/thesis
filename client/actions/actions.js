import helpers from '../util/helpers';

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

export const resetSearch = () => {
  return {
    type: 'RESET_SEARCH',
  };
};

export const buildDeckYelp = (yelpData) => {
  return {
    type: 'BUILD_DECK_YELP',
    yelpData
  };
};

// this action will increment currentCard by 1

export const nextCard = () => {
  return {
    type: 'NEXT_CARD'
  }
}

export const prevCard = () => {
  return {
    type: 'PREV_CARD'
  }
}

// toggleLike will search currentDeck, find matching id and will toggle like
// and it will also toggle votedOn to true

export const toggleLikeTrue = (id) => {
  return {
    type: 'TOGGLE_LIKE_TRUE',
    id
  } 
}

export const toggleLikeFalse = (id) => {
  return {
    type: 'TOGGLE_LIKE_FALSE',
    id
  }
}

export const takePictureSuccess = () => {
  return {
    type: 'TAKE_PICTURE_SUCCESS'
  }
}

export const getUsers = (users) => {
  return {
    type: 'GET_USERS',
    users
  }
}
