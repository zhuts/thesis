export default (state = {term: '', location: '', num: 10}, action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      return {
        ...state,
        term: action.term
      }
    case 'SEARCH_LOCATION':
      return {
        ...state,
        location: action.location
      }
    case 'RESET_SEARCH':
      return {
        term: '',
        location: '',
        num: 10
      }
    case 'NUM_OF_CARDS':
      return {
        ...state,
        num: action.num
      }
    default:
      return state;
  }
};
