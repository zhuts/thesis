import { connect } from 'react-redux';
import helpers from '../util/helpers';
import FriendsListComponent from '../components/friendsList';
import * as action from '../actions/actions';

const mapStateToProps = (state) => {
  return { 
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleLikeClick: (id, liked) => { dispatch(action.toggleLike(id, liked)) },
    getUsers: (users) => { dispatch(action.getUsers(users)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsListComponent);