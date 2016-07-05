import { connect } from 'react-redux';
import helpers from '../util/helpers';
import Results from '../components/results';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    currentViewDeck: state.currentViewDeck,
  }
};

export default connect(mapStateToProps)(Results);