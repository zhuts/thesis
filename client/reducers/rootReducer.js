import { combineReducers } from 'redux';
import buildDeck from './buildDeckReducer';
import changeCard from './changeCardReducer';
import searchReducer from './searchReducer';
import toggleLike from './toggleLikeReducer';
import cameraReducer from './cameraReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  currentDeck: buildDeck,
  currentCard: changeCard,
  search: searchReducer,
  camera: cameraReducer,
  users: usersReducer
  // toggleLike
});

export default rootReducer;
