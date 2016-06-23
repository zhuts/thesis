import { createStore, combineReducers, compose } from 'redux';
// import all reducers
import {
  searchReducer,
  buildDeckReducer,
  changeCardReducer,
  toggleLikeReducer,
} from '../reducers/reducers';

export const configure = () => {
  const reducer = combineReducers({
    // state prop and corresponding reducer
    // currentDeck: deckReducer
    search: searchReducer,
    currentDeck: buildDeckReducer,
    changeCardReducer: changeCardReducer,
    toggleLikeReducer: toggleLikeReducer
  })
  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
}


/*
state = {
  search = {
    term: '',
    location: ''
  },
  currentDeck = [],
  currentCard = 0,
  
}
*/
