//this reducer will increment a state counter by one, so that the number
//of photos taken by the user is the number of photos pulled from the cameraRoll 
export default (state = 0, action) => {
  switch (action.type) {
    case 'TAKE_PICTURE_SUCCESS':
      return state + 1
    default:
      return state;
  }
};
