import { connect } from 'react-redux';
import helpers from '../util/helpers';
import SearchComponent from '../components/search';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    term: state.search.term,
    location: state.search.location,
    num: state.search.num
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (term) => {dispatch(actions.searchTerm(term))},
    searchLocation: (location) => {dispatch(actions.searchLocation(location))},
    buildDeckYelp: (data) => {dispatch(actions.buildDeckYelp(data))},
    cameraModeOff: () => {dispatch(actions.cameraModeOff())},
    numOfCards: (num) => {dispatch(actions.numOfCards(num))},
    resetSearch: () => {dispatch(actions.resetSearch())}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
