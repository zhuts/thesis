import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  View,
  Animated,
  PanResponder,
  TouchableOpacity
} from 'react-native';
import Card from './card';
import ImageCard from '../containers/imageCardContainer';
import * as action from '../actions/actions';
import styles from '../assets/styles';

let SWIPE_THRESHOLD = 120;

export default class deckView extends Component{
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      enter: new Animated.Value(0.5),
    }
  }

  componentDidMount() {
    this._animateEntrance();
  }

  _animateEntrance() {
    Animated.spring(
      this.state.enter,
      { toValue: 1, friction: 8 }
    ).start();
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onMoveShouldSetPanResponderCapture: () => true,

      //sets x,y to 0 when finger is detected
      onPanResponderGrant: (evt, gestureState) => {
        //set x,y to 0
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value
        });
        this.state.pan.setValue({
          x: 0,
          y: 0
        });
      },

      //value of x,y change relative to where finger started
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {

        if (this.state.pan.x._value > SWIPE_THRESHOLD) {
          this._resetState(true)
        } else if (this.state.pan.x._value < -SWIPE_THRESHOLD){
          this._resetState(false)
        }
        Animated.spring(this.state.pan, {
          toValue: 0
        });
      },

      onMoveShouldSetPanResponder: () => true,

      onMoveShouldSetPanResponderCapture: () => true,

      //sets x,y to 0 when finger is detected
      onPanResponderGrant: (evt, gestureState) => {
        //set x,y to 0
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value
        });
        this.state.pan.setValue({
          x: 0,
          y: 0
        });
      },

      //value of x,y change relative to where finger started
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {

        if (this.state.pan.x._value > SWIPE_THRESHOLD) {
          this._resetState(true)
        } else if (this.state.pan.x._value < -SWIPE_THRESHOLD){
          this._resetState(false)
        }
        Animated.spring(this.state.pan, {
          toValue: 0
        });
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
  _changePage(){
    if (this.props.cameraMode) {
      this.props.navigator.push({ name: 'splash' });
    }
    else if(this.props.currentCard >= 15) {
      this.props.navigator.push({ name: 'results' });
    }
  }

  _resetState(liked){
    const { currentCard, currentDeck, changeCardSwipe } = this.props;
    // this.props.toggleLikeClick(liked);
    this.state.pan.setValue({x: 0, y: 0});
    this.state.enter.setValue(0);
    if(currentCard < currentDeck.length - 1) {
      changeCardSwipe();      
      this._animateEntrance();
      } else {
        this._changePage();
      }


  }

  render() {
    //ternary to display yelp logo if yelp searching, otherwise photos
    const { pan, enter } = this.state;
    const { currentDeck, currentCard, cameraMode } = this.props;

    let [translateX, translateY] = [pan.x, pan.y];
    let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]});
    let opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5]});
    let scale = enter;
    let animatedCard = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};

    return (
      <View style={styles.container}>
      {cameraMode === false ?
        <View style={styles.searchResultsContainer}>
          <Image
            source={require('../assets/yelp-logo-large.png')}
          />
          <Text style={styles.searchResults}>{this.props.searchParam.term}</Text>
        </View> :
        <View>
          <Text>Photos</Text>
        </View>
      }
        <Animated.View style={[styles.swipeCard, animatedCard]} {...this._panResponder.panHandlers}>
          {cameraMode === false ?
            <Card business={currentDeck[currentCard]} /> :
            <ImageCard img={currentDeck[currentCard]} />
          }
        </Animated.View>

        <TouchableOpacity
          style={styles.leftSwipeBtn}
          onPress={() => {
            { this.props.toggleLikeFalse(currentCard) }
            {this._resetState()};
          }}>
          <Text>LEFT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rightSwipeBtn}
          onPress={() => {
            { this.props.toggleLikeTrue(currentCard) }
            {this._resetState()};
          }}>
          <Text>RIGHT</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
