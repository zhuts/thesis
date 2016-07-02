import { connect } from 'react-redux';
import helpers from '../util/helpers';
import WelcomeComponent from '../components/welcome-view';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    token: state.token
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (profile) => {dispatch(actions.setProfile(profile))},
    setToken: (token) => {dispatch(actions.setToken(token))},
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeComponent);