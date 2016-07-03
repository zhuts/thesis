import { connect } from 'react-redux';
import helpers from '../util/helpers';
import CameraComponent from '../components/camera';
import * as action from '../actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    takePictureSuccess: () => { dispatch(action.takePictureSuccess()) },
    cameraModeOn: () => { dispatch(action.cameraModeOn()) }
  }
};
// const mapStateToProps = (state) => {
//   return {
//     mode: state.camera.mode
//   }
// }

export default connect(null, mapDispatchToProps)(CameraComponent);
