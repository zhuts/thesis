import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';

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
