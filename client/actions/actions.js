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

export const getUsers = (users) => {
  return {
    type: 'GET_USERS',
    users
  }
}

//================================================

//Camera Actions


//================================================

//takePictureSuccess will increment a counter by one, so that the proper
//number of pics are pulled from the cameraRoll in buildImageDeck
export const takePictureSuccess = () => {
  return {
    type: 'TAKE_PICTURE_SUCCESS'
  }
}
//changeToCameraMode will set a state boolean so that the deckview will render
//images instead of yelp cards
export const changeToCameraMode = () => {
  return {
    type: 'CAMERA_MODE'
  }
}
//will create deck out of images from cameraRoll
export const buildImageDeck = (images) => {
  return {
    type: 'BUILD_IMAGE_DECK',
    images
  };
}
//will toggle status of loading images in deckview
export const doneLoading = () => {
  return {
    type: 'DONE_LOADING'
  }
}

export const getFriends = (friends) => {
  return {
    type: 'GET_FRIENDS',
    friends
  }
}

export const addFriend = (users, id) => {
  return {
    type: 'ADD_FRIEND',
    users,
    id
  }
}

export const setProfile = (profile) => {
  return {
    type: 'SET_PROFILE',
    profile
  }
}

export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    token
  }
}
