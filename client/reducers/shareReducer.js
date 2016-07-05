import _ from 'underscore';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_SHARED':
      if (_.indexOf(state, action.user) === -1) {
        return [...state, action.user];
      } else {
        return state;
      }
    case 'REMOVE_FROM_SHARED':
      return _.filter(state, (user) => {
        return user.email !== action.user.email;
      });
    default:
      return state;
  }
};