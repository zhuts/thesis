import { createStore, combineReducers, compose } from 'redux';
// import all reducers
import {
  searchTermReducer,
  searchLocationReducer,
  buildDeckReducer
} from '../reducers/reducers';

export const configure = () => {
  const reducer = combineReducers({
    // state prop and corresponding reducer
    // currentDeck: deckReducer
    searchTerm: searchTermReducer,
    searchLocation: searchLocationReducer,
    currentDeck: buildDeckReducer
  })
  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
}