// import React, { Component } from 'react';
// import { 
//   View, 
//   TextInput,
//   Text,
//   TouchableHighlight, 
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image
// } from 'react-native';
// import { connect } from 'react-redux';
// import helpers from '../util/helpers';
// import * as actions from '../actions/actions';

// export default class SavedComponent extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     var _scrollView: ScrollView;
//     return (  

//        <View>
//         <ScrollView
//           ref={(scrollView) => { _scrollView = scrollView; }}
//           automaticallyAdjustContentInsets={false}
//           onScroll={() => { console.log('onScroll!'); }}
//           scrollEventThrottle={200}
//           style={styles.scrollView}>
//           {THUMBS.map(createThumbRow)}
//         </ScrollView>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => { _scrollView.scrollTo({y: 0}); }}>
//           <Text>Scroll to top</Text>
//         </TouchableOpacity>
//         <TouchableHighlight
//           style={styles.back}
//           underlayColor={'lightblue'}
//           onPress={() => { this.props.navigator.pop() }}
//          >
//           <Text>Back</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// class Thumb extends Component{
//   shouldComponentUpdate(nextProps, nextState) {
//     return false;
//   }
//   render() {
//     return (
//       <View style={styles.button}>
//         <Image style={styles.img} source={{uri:this.props.uri}} />
//       </View>
//     );
//   }
// };
// var THUMBS = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
// const createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

// var styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: '#6A85B1',
//     height: 400,
//   },
//   text: {
//     fontSize: 20,
//     color: '#888888',
//     left: 80,
//     top: 20,
//     height: 40,
//   },
//   button:  { 
//     height: 200,
//     margin: 7,
//     padding: 5,
//     alignItems: 'center',
//     backgroundColor: '#eaeaea',
//     borderRadius: 3,
//   },
//   buttonContents: {
//     flexDirection: 'row',
//     width: 64,
//     height: 64,
//   },
//   img: {
//     width: 64,
//     height: 64,
//   },
//   back: {
//     width: 40,
//     height: 20,
//     justifyContent: 'flex-start',
//     alignSelf: 'flex-start',
//     position: 'absolute',
//     borderColor: 'blue', 
//     borderWidth: 1,
//     borderRadius: 5,
//   }
// });
