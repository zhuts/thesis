import { connect } from 'react-redux';
import helpers from '../util/helpers';
import DeckViewComponent from '../components/deck_view';
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
    changeCardSwipe: () => { dispatch(action.nextCard()) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckViewComponent);