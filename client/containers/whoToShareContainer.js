import { connect } from 'react-redux';
import helpers from '../util/helpers';
import WhoToShareComponent from '../components/whoToShare';
import * as action from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    shared: state.shared,
    friends: state.friends
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToShared: (user) => { dispatch(action.addToShared(user)) },
    removeFromShared: (user) => { dispatch(action.removeFromShared(user)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WhoToShareComponent);