import { combineReducers } from 'redux';
import currentDeck from './deckReducer';
import currentCard from './currentCardReducer';
import searchReducer from './searchReducer';
import cameraReducer from './cameraReducer';
import usersReducer from './usersReducer';
import friendsReducer from './friendsReducer';
import welcomeReducer from './welcomeReducer';

const rootReducer = combineReducers({
  currentDeck: currentDeck,
  currentCard: currentCard,
  search: searchReducer,
  camera: cameraReducer,
  users: usersReducer,
  friends: friendsReducer,
  welcome: welcomeReducer
});

export default rootReducer;
