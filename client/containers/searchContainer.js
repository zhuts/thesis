import { connect } from 'react-redux';
import helpers from '../util/helpers';
import SearchComponent from '../components/search';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    term: state.search.term,
    location: state.search.location
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (term) => {dispatch(actions.searchTerm(term))},
    searchLocation: (location) => {dispatch(actions.searchLocation(location))},
    buildDeck: (data) => {dispatch(actions.buildDeck(data))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);