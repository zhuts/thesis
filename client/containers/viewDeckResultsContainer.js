import { connect } from 'react-redux';
import ViewDeckResults from '../components/viewDeckResults';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    currentViewDeck: state.currentViewDeck,
    user_id: state.welcome.profile.userId,
  }
};

export default connect(mapStateToProps)(ViewDeckResults);