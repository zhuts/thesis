import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function configureStore (){
  const store = createStore(
    rootReducer, compose(
      applyMiddleware(thunk),
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
