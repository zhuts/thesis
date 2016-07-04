//this reducer will increment a state counter by one, so that the number
//of photos taken by the user is the number of photos pulled from the cameraRoll
export default (state = {picsTaken: 0, mode: true}, action) => {
  switch (action.type) {
    case 'TAKE_PICTURE_SUCCESS':
      return {
        ...state,
        picsTaken: state.picsTaken + 1
      }
    case 'CAMERA_MODE_ON':
      return {
       ...state,
       mode: true
      }
    case 'CAMERA_MODE_OFF':
      return {
        ...state,
        mode: false
      }
    default:
      return state;
  }
};
