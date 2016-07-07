import helpers from '../util/helpers';

//================================================

//Yelp Actions

//================================================

//will send the search term to yelp api query
export const searchTerm = (term) => {
  return {
    type: 'SEARCH_TERM',
    term
  };
};

//will send the search location to yelp api query
export const searchLocation = (location) => {
  return {
    type: 'SEARCH_LOCATION',
    location
  };
};

//will reset the search parameters to empty strings
export const resetSearch = () => {
  return {
    type: 'RESET_SEARCH',
  };
};

//will build a deck of yelp data
export const buildDeckYelp = (yelpData) => {
  return {
    type: 'BUILD_DECK_YELP',
    yelpData
  };
};

//================================================

//Deck Actions

//================================================

//will increment currentCard by 1
export const nextCard = () => {
  return {
    type: 'NEXT_CARD'
  }
}

//will decrement currentCard by 1
export const prevCard = () => {
  return {
    type: 'PREV_CARD'
  }
}

//will toggle like property of index of currentDeck to true
//and will also toggle votedOn to true
export const toggleLikeTrue = (index) => {
  return {
    type: 'TOGGLE_LIKE_TRUE',
    index
  }
}

//will toggle like property of index of currentDeck to false
export const toggleLikeFalse = (index) => {
  return {
    type: 'TOGGLE_LIKE_FALSE',
    index
  }
}

//================================================

//Camera Actions

//================================================

//will increment a counter by one, so that the proper
//number of pics are pulled from the cameraRoll in buildImageDeck
export const takePictureSuccess = () => {
  return {
    type: 'TAKE_PICTURE_SUCCESS'
  }
}


//will set a state boolean so that the deckview will render
//images instead of yelp cards- default is true
export const cameraModeOn = () => {
  return {
    type: 'CAMERA_MODE_ON'
  }
}

//will set a state boolean so that the deckview will render
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

//will toggle whether or not user would like to add picture to deck to
//send to friends
export const togglePickTrue = (index) => {
  return {
    type: 'TOGGLE_PICK_TRUE',
    index
  }
}

//will toggle whether or not user would like to add picture to deck to
//send to friends
export const togglePickFalse = (index) => {
  return {
    type: 'TOGGLE_PICK_FALSE',
    index
  }
}

//will build a new deck from picked pictures- not currently implemented
export const pickImageDeck = (deck) => {
  return {
    type: 'PICK_IMAGE_DECK',
    deck
  }
}

export const numOfCards = (num) => {
  return {
    type: 'NUM_OF_CARDS',
    num
  }
}

export const deleteCard = (index) => {
  return {
    type: 'DELETE_CARD',
    index
  }
}

//================================================

//User Actions

//================================================

//will get users to for users view
export const getUsers = (users) => {
  return {
    type: 'GET_USERS',
    users
  }
}

//will get current user's friends for user's view
export const getFriends = (friends) => {
  return {
    type: 'GET_FRIENDS',
    friends
  }
}

//will add friend to current user's list of friends
export const addFriend = (friendsList) => {
  return {
    type: 'ADD_FRIEND',
    friendsList
  }
}

//will set a profile object to state when user logs in
export const setProfile = (profile) => {
  return {
    type: 'SET_PROFILE',
    profile
  }
}

//will set a token object to state when user logs in
export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    token
  }
}

//will set a user's deck when a user finishes swiping
export const setUserDecks = (userDecks) => {
  return {
    type: 'SET_USER_DECKS',
    userDecks
  }
}

//will set a shared deck when a user shares a deck with friends
export const setSharedDecks = (sharedDecks) => {
  return {
    type: 'SET_SHARED_DECKS',
    sharedDecks
  }
}

//================================================

//currentViewDeck Actions

//================================================


//will set a current deck when the user goes to the view deck page
export const setCurrentViewDeck = (currentViewDeck) => {
  return {
    type: 'SET_CURRENT_VIEW_DECK',
    currentViewDeck
  }
}

//will sort the current view deck in descending order of likes
export const sortCurrentViewDeck = () => {
  return {
    type: 'SORT_CURRENT_VIEW_DECK'
  }
}

//will generate a new view card after the use swipes a previous card
export const changeCurrentViewCard = () => {
  return {
    type: 'CHANGE_CURRENT_VIEW_CARD'
  }
}

//will generate a card according to the user's search input
export const resetCurrentViewCard = () => {
  return {
    type: 'RESET_CURRENT_VIEW_CARD'
  }
}

//will show yelp when the user goes to the yelp page
export const showYelp = () => {
  return {
    type: 'SHOW_YELP'
  }
}

//will reset the deck when the user decides to build a deck again
export const resetCurrentDeck = () => {
  return {
    type: 'RESET_CURRENT_DECK'
  }
}

//will reset the deck when the user decides to build a deck again
export const resetCardCount = () => {
  return {
    type: 'RESET_CARD_COUNT'
  }
}

//will get the current user's saved decks
export const fetchUserDecks = (userid) => {
  return (dispatch, getState) => {
    helpers.getUserCreatedDecks(userid, (userDecks) => {
      const set = () => {
        userDecks.reverse();
        dispatch( setUserDecks(userDecks) );
      };
      const decks = userDecks.length;
      let count = 0;
      userDecks.forEach( (deck, i) => {
        if(deck.type === 'yelp') {
          dispatch( showYelp() );
          const setDeck = () => {
            userDecks[i] = deck;
          }
          const length = deck.deck.length;
          let done = 0;
          deck.deck.forEach((card, j) => {
            helpers.getYelpBusiness(card.name, (business) => {
              deck.deck[j] = {
                ...business,
                _id: card._id
              };
              done++;
              if(done === length) {
                setDeck();
                count++;
              };
              if(count === decks) {
                set();
              }
            });
          })
        } else {
          userDecks[i] = deck;
          count++;
          if(count === decks) {
            set();
          }
        }
      });
    });
  }
}

//will fetch the current user's shared decks
export const fetchSharedDecks = (userid, callback) => {
  return (dispatch, getState) => {
    helpers.getUserSharedDecks(userid, (sharedDecks) => {
      const set = () => {
        sharedDecks.reverse();
        dispatch( setSharedDecks(sharedDecks) );
        if(callback !== undefined) {
          callback()
        };
      };
      const decks = sharedDecks.length;
      let count = 0;
      sharedDecks.forEach( (deck, i) => {
        if(deck.type === 'yelp') {
          dispatch( showYelp() );
          const setDeck = () => {
            sharedDecks[i] = deck;
          }
          const length = deck.deck.length;
          let done = 0;
          deck.deck.forEach((card, j) => {
            helpers.getYelpBusiness(card.name, (business) => {
              deck.deck[j] = {
                ...business,
                _id: card._id,
                likes: card.likes
              };
              done++;
              if(done === length) {
                setDeck();
                count++;
              };
              if(count === decks) {
                set();
              }
            });
          })
        } else {
          sharedDecks[i] = deck;
          count++;
          if(count === decks) {
            set();
          }
        }
      });
    })
  }
}


//will trigger when a user picks a friend to share deck with
export const addToShared = (shareList) => {
  return {
    type: 'ADD_TO_SHARED',
    shareList
  }
}

export const removeFromShared = (user) => {
  return {
    type: 'REMOVE_FROM_SHARED',
    user
  }
}

export const changeLocAfterUpload = (index, uri) => {
  return {
    type: 'CHANGE_LOC_AFTER_UPLOAD',
    index,
    uri
  }
}
