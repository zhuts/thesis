import { connect } from 'react-redux';
import ViewDecks from '../components/viewDecks';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    userDecks: state.userDecks,
    sharedDecks: state.sharedDecks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserDecks: (userDecks) => { dispatch(actions.setUserDecks(userDecks)) },
    setSharedDecks: (sharedDecks) => { dispatch(actions.setSharedDecks(sharedDecks)) },
    setCurrentViewDeck: (currentViewDeck) => { dispatch(actions.setCurrentViewDeck(currentViewDeck)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewDecks);