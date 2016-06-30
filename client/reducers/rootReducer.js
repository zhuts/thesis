import { combineReducers } from 'redux';
import buildDeck from './deckReducer';
import changeCard from './currentCardReducer';
import searchReducer from './searchReducer';
import cameraReducer from './cameraReducer';
import usersReducer from './usersReducer';
import friendsReducer from './friendsReducer';
import welcomeReducer from './welcomeReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  currentDeck: buildDeck,
  currentCard: changeCard,
  search: searchReducer,
  camera: cameraReducer,
  users: usersReducer,
  friends: friendsReducer,
  welcome: welcomeReducer,
  isLoading: loadingReducer
});

export default rootReducer;
