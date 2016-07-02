import { connect } from 'react-redux';
import ViewDeckResults from '../components/viewDeckResults';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    currentViewDeck: state.currentViewDeck,
  }
};

export default connect(mapStateToProps)(ViewDeckResults);