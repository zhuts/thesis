/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


const mockCard = [
  {searchParam:"New Computers", cardTitle:"Apple IIe", cardPic:"./testAssets/apple2-100009966-orig.jpg"}
];

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  Animated,
  PanResponder
} from 'react-native';

class thesis extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      enter: new Animated.Value(0.5)
    };
  }

  componentDidMount() {

  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
//sets x,y to 0 when finger is detected  
      onPanResponderGrant: (evt, gestureState) => {
        //set x,y to 0
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
      },
//value of x,y change relative to where finger started
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y}
      ]),
//returns 
      onPanResponderRelease: () => {
        Animated.spring(this.state.pan, {
          toValue: 0
        }).start();
      },

      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    })
  }

  render() {
    let mock = mockCard[0];
    let {pan, enter} = this.state;
    let [translateX, translateY] = [pan.x, pan.y];
    let animatedCard = {transform: [{translateX}, {translateY}]};

    return (
      <View style={styles.container}>
        <View style={styles.searchResultsContainer}>
          <Text style={styles.searchResults}>{mock.searchParam}</Text>
        </View>
        <Animated.View style={[styles.swipeCard, animatedCard]} {...this._panResponder.panHandlers}>
          <Text style={styles.cardTitleStyle}>{mock.cardTitle}</Text>
          <Image style={styles.cardPicStyle} source={{uri: 'mock.cardPic'}} />
        </Animated.View>

        <View style={styles.leftSwipeBtn}>
          <Text>LEFT</Text>
        </View>

        <View style={styles.rightSwipeBtn}>
          <Text>RIGHT</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3FCFF'
  },
  searchResultsContainer:{
    position: 'absolute',
    left:0,
    top:0
  },
  searchResults:{
    padding: 30,
    fontSize: 20,   
    textAlign: 'left',
    margin: 10
  },
  swipeCard: {
    borderWidth: 5,
    borderRadius: 5,
    borderColor: '#000',
    width: 300,
    height: 300
  },
  cardTitleStyle:{
    position: 'absolute',
    left:0,
    top:0,
    color: '#888'
  },
  cardPicStyle:{
    width: 200,
    height: 200
  },
  leftSwipeBtn:{
    borderColor: 'red',
    borderWidth: 2,
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    left: 20,
  },
  leftSwipeText:{
  },
  rightSwipeBtn:{
    borderColor: 'green',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    bottom: 20,
    borderRadius: 5,
    right: 20,
  },
  rightSwipeText:{
  }
});

AppRegistry.registerComponent('thesis', () => thesis);
