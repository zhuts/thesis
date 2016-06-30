import { connect } from 'react-redux';
import helpers from '../util/helpers';
import ImageCardComponent from '../components/imageCard';
import * as action from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    currentCard: state.currentCard,
    currentDeck: state.currentDeck,
    isLoading: state.isLoading,
    numOfPics: state.camera.picsTaken,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buildImageDeck: (images) => { dispatch(action.buildImageDeck(images)) },
    doneLoading: () => { dispatch(action.doneLoading()) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageCardComponent);
