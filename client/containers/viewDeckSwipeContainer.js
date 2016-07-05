import { connect } from 'react-redux';
import ViewDeckSwipe from '../components/viewDeckSwipe';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    currentViewDeck: state.currentViewDeck,
    currentViewCard: state.currentViewCard,
    user_id: state.welcome.profile.userId,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentViewCard: () => { dispatch(actions.changeCurrentViewCard()) },
    resetCurrentViewCard: () => { dispatch(actions.resetCurrentViewCard()) },
    fetchUserDecks: (userid) => { dispatch(actions.fetchUserDecks(userid)) },
    fetchSharedDecks: (userid) => { dispatch(actions.fetchSharedDecks(userid)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewDeckSwipe);