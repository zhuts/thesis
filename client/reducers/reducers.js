export var nameOfReducer = (state = 'default state', action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return ;
    default:
      return state;
  }
};


/*export var nameOfReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_DECK':
      return [
        //new deck
      ];
    default:
      return state;
  }
};*/