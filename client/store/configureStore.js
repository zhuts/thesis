import { createStore, combineReducers, compose } from 'redux';
// import all reducers
import {
  changeCardReducer,
  toggleLikeReducer
} from '../reducers/reducers';

export const configure = () => {
  const reducer = combineReducers({
    // state prop and corresponding reducer
    // currentDeck: deckReducer
    // searchTerm: searchTermReducer,
    // searchLocation: searchLocationReducer,
    // currentDeck: buildDeckReducer
    changeCardReducer: changeCardReducer,
    toggleLikeReducer: toggleLikeReducer
  })
  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
}