import redux from 'redux';
// import all reducers

export const configureStore = () => {
  const reducer = redux.combineReducers({
    // state prop and corresponding reducer
    // currentDeck: deckReducer
    
  })
  
  const store = redux.createStore(reducer);
  
  return store;
}