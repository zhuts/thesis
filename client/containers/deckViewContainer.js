import { connect } from 'react-redux';
import helpers from '../util/helpers';
import DeckViewComponent from '../components/deck_view';
import * as action from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    searchParam: state.search,
    currentCard: state.currentCard,
    currentDeck: state.currentDeck,
    numOfPics: state.camera.picsTaken,
    cameraMode: state.camera.mode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCardSwipe: () => { dispatch(action.nextCard()) },
    toggleLikeTrue: (id) => { dispatch(action.toggleLikeTrue(id)) },
    toggleLikeFalse: (id) => { dispatch(action.toggleLikeFalse(id)) },
    buildImageDeck: (images) => { dispatch(action.buildImageDeck(images)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckViewComponent);
