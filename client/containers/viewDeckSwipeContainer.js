import { connect } from 'react-redux';
import ViewDeckSwipe from '../components/viewDeckSwipe';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    currentViewDeck: state.currentViewDeck,
    currentViewCard: state.currentViewCard,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentViewCard: () => { dispatch(actions.changeCurrentViewCard()) },
    resetCurrentViewCard: () => { dispatch(actions.resetCurrentViewCard()) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewDeckSwipe);