import { combineReducers } from 'redux';
import buildDeck from './buildDeckReducer';
import changeCard from './changeCardReducer';
import searchReducer from './searchReducer';
import toggleLike from './toggleLikeReducer';

const rootReducer = combineReducers({
  currentDeck: buildDeck,
  currentCard: changeCard,
  search: searchReducer
  // toggleLike
});

export default rootReducer;