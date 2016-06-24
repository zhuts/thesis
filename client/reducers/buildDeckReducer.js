export default (state = [], action) => {
  switch (action.type) {
    case 'BUILD_DECK':
      return [
        ...action.yelpData
      ]
    default:
      return state;
  }
};