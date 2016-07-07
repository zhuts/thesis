const tilZero = (num) => {
  if (num === 0){
    return 0;
  } else {
    return num - 1;
  }
}
export default (state = 0, action) => {
  switch (action.type) {
    case 'BUILD_DECK_YELP':
      return 0;
    case 'PREV_CARD':
      return tilZero(state);
    case 'NEXT_CARD':
      return state + 1
    case 'RESET_CARD_COUNT':
      return 0
    default:
      return state;
  }
}
