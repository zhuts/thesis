import { connect } from 'react-redux';
import ViewDecks from '../components/viewDecks';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    userDecks: state.userDecks,
    sharedDecks: state.sharedDecks,
    user_id: state.welcome.profile.userId,
    showYelp: state.showYelp,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentViewDeck: (currentViewDeck) => { dispatch(actions.setCurrentViewDeck(currentViewDeck)) },
    fetchUserDecks: (userid) => { dispatch(actions.fetchUserDecks(userid)) },
    fetchSharedDecks: (userid) => { dispatch(actions.fetchSharedDecks(userid)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewDecks);