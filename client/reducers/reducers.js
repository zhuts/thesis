export var nameOfReducer = (state = 'default state', action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return ;
    default:
      return state;
  }
};


// export var deckReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'UPDATE_DECK':
//       return [ action.deck, ...state ];
//     default:
//       return state;
//   }
// };