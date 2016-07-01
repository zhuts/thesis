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

<<<<<<< 274703e13a0f104ced16666d4e46a993210aaf2c
// this action will increment currentCard by 1
=======
// export const buildDeckYelp = (term,location) => {
//   let yelpData;
//   if (term !== '' && location !== '') {
//     helpers.searchYelp(term, location, (yelp) => {
//       yelpData = yelp.map( (business) => { 
//         return {
//           ...business,
//           like: undefined
//         }
//       });
//     });
//   }
  
//   return {
//     type:"BUILD_DECK",
//     yelpData
//   }
// };

// this action will increment currentCard by 1 until it hits currentDeck.length
// when it hits currentDeck.length, switch to results page
>>>>>>> factors out styles, adds aws packages

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

<<<<<<< 6bd7194d00f195d9dcc96dfe86f141951b43279c
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
=======
export const toggleLikeTrue = (currentCard, currentDeck) => {
  return {
    type: 'TOGGLE_LIKE_TRUE',
    currentCard,
    currentDeck
  }
}

export const toggleLikeFalse = (currentCard, currentDeck) => {
  return {
    type: 'TOGGLE_LIKE_FALSE',
    currentCard,
    currentDeck
>>>>>>> adds liked actions
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
//cameraModeOn will set a state boolean so that the deckview will render
//images instead of yelp cards
export const cameraModeOn = () => {
  return {
    type: 'CAMERA_MODE_ON'
  }
}
//changeToCameraMode will set a state boolean so that the deckview will render
//yelpCards instead of images
export const cameraModeOff = () => {
  return {
    type: 'CAMERA_MODE_OFF'
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

export const setUserDecks = (userDecks) => {
  return {
    type: 'SET_USER_DECKS',
    userDecks
  }
}

export const setSharedDecks = (sharedDecks) => {
  return {
    type: 'SET_SHARED_DECKS',
    sharedDecks
  }
}

export const setCurrentViewDeck = (currentViewDeck) => {
  return {
    type: 'SET_CURRENT_VIEW_DECK',
    currentViewDeck
  }
}

export const changeCurrentViewCard = () => {
  return {
    type: 'CHANGE_CURRENT_VIEW_CARD'
  }
}

export const resetCurrentViewCard = () => {
  return {
    type: 'RESET_CURRENT_VIEW_CARD'
  }
}
