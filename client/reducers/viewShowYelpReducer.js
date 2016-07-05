export default (state = false, action) => {
  switch (action.type) {
    case 'SHOW_YELP':
      return true
    default:
      return state
  }
};