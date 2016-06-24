import { connect } from 'react-redux';
import helpers from '../util/helpers';
import DeckViewComponent from '../components/deck_view_new2';
import * as action from '../actions/actions';

const mapStateToProps = (state) => {
  return { 
    searchParam: state.search,
    currentCard: state.currentCard,
    currentDeck: state.currentDeck    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleLikeClick: (id, liked) => { dispatch(action.toggleLike(id, liked)) },
    changeCardSwipe: (id) => { dispatch(action.changeCard(id)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckViewComponent);