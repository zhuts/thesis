import { connect } from 'react-redux';
import helpers from '../util/helpers';
import SplashComponent from '../components/splash';
import * as action from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleLikeClick: (id, liked) => { dispatch(action.toggleLike(id, liked)) },
    getUsers: (users) => { dispatch(action.getUsers(users)) }
  }
};

export default connect(null, mapDispatchToProps)(SplashComponent);