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
    toggleLikeTrue: (index) => { dispatch(action.toggleLikeTrue(index)) },
    toggleLikeFalse: (index) => { dispatch(action.toggleLikeFalse(index)) },
    buildImageDeck: (images) => { dispatch(action.buildImageDeck(images)) },
    togglePickTrue: (id) => { dispatch(action.togglePickTrue(id))},
    togglePickFalse: (id) => { dispatch(action.togglePickFalse(id))},
    changeLocAfterUpload: (index, uri) => { dispatch(action.changeLocAfterUpload(index, uri))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckViewComponent);
