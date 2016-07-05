export default (state = { profile: {}, token: {} }, action) => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {...state, profile: action.profile}
    case 'SET_TOKEN':
      return {...state, token: action.token}
    default:
      return state;
  }
}