export default (state = 0, action) => {
  switch (action.type) {
    case 'PREV_CARD':
      return state - 1
    case 'NEXT_CARD':
      return state + 1
    default:
      return state;
  }
}