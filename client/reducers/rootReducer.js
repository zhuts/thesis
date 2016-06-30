import { combineReducers } from 'redux';
import buildDeck from './buildDeckReducer';
import changeCard from './changeCardReducer';
import searchReducer from './searchReducer';
import toggleLike from './toggleLikeReducer';
import cameraReducer from './cameraReducer';

const rootReducer = combineReducers({
  currentDeck: buildDeck,
  currentCard: changeCard,
  search: searchReducer,
  camera: cameraReducer
  // toggleLike
});

export default rootReducer;
