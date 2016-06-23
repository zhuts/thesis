export default (state = {term: '', location: ''}, action) => {
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
        location: ''
      }
    default:
      return state;
  }
};