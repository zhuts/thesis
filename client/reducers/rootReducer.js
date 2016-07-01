import { combineReducers } from 'redux';
import currentDeck from './deckReducer';
import currentCard from './currentCardReducer';
import searchReducer from './searchReducer';
import cameraReducer from './cameraReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  currentDeck: currentDeck,
  currentCard: currentCard,
  search: searchReducer,
  camera: cameraReducer,
  users: usersReducer
});

export default rootReducer;
