import { connect } from 'react-redux';
import helpers from '../util/helpers';
import SplashComponent from '../components/splash';
import * as action from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    currentDeck: state.currentDeck
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleLikeClick: (id, liked) => { dispatch(action.toggleLike(id, liked)) },
    getUsers: (users) => { dispatch(action.getUsers(users)) },
    getFriends: (friends) => { dispatch(action.getFriends(friends)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashComponent);