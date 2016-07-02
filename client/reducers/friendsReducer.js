import _ from 'underscore';

export default (state = [], action) => {
  switch (action.type) {
    case 'GET_FRIEND': 
      return action.friends;
    case 'ADD_FRIEND':
      var newFriend = {};
      _.forEach(action.users, (user) => {
        if (user.user_id === action.id) {
          newFriend = Object.assign(user);
        }
      })
      return [...state, newFriend];
    default:
      return state;
  }
}

