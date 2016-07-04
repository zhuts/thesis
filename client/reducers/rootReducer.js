import { combineReducers } from 'redux';
import buildDeck from './deckReducer';
import changeCard from './currentCardReducer';
import searchReducer from './searchReducer';
import cameraReducer from './cameraReducer';
import usersReducer from './usersReducer';
import friendsReducer from './friendsReducer';
import welcomeReducer from './welcomeReducer';
import loadingReducer from './loadingReducer';
import viewUserDecksReducer from './viewUserDecksReducer';
import viewSharedDecksReducer from './viewSharedDecksReducer';
import viewCurrentViewDeckReducer from './viewCurrentViewDeckReducer';
import viewChangeCurrentViewCardReducer from './viewChangeCurrentViewCardReducer';

const rootReducer = combineReducers({
  currentDeck: buildDeck,
  currentCard: changeCard,
  search: searchReducer,
  camera: cameraReducer,
  users: usersReducer,
  friends: friendsReducer,
  welcome: welcomeReducer,
  isLoading: loadingReducer,
  userDecks: viewUserDecksReducer,
  sharedDecks: viewSharedDecksReducer,
  currentViewDeck: viewCurrentViewDeckReducer,
  currentViewCard: viewChangeCurrentViewCardReducer,
});

export default rootReducer;
