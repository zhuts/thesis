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
import { RNS3 } from 'react-native-aws3';
import s3Cred from "../util/s3credentials";
import helpers from '../util/helpers';

//dictates when swipe is registered
let SWIPE_THRESHOLD = 120;
//component for viewing decks of cards, images or yelpData
export default class deckView extends Component{
  constructor(props) {
    super(props);
    //internal state for touch swiping
    this.state = {
      pan: new Animated.ValueXY(),
      enter: new Animated.Value(0.5),
    }
  }
  //after render, animate card entrance
  componentDidMount() {
    this._animateEntrance();
  }
  //card entrance animation
  _animateEntrance() {
    Animated.spring(
      this.state.enter,
      { toValue: 1, friction: 8 }
    ).start();
  }
  //before render, sets touch properties
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
          if(this.props.cameraMode){
            this.props.togglePickTrue(this.props.currentCard)
          }
          this._resetState(true)
        } else if (this.state.pan.x._value < -SWIPE_THRESHOLD){
          if(this.props.cameraMode){
            this.props.togglePickFalse(this.props.currentCard)
          }
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
  //called to change user view when deck is finished, conditional specifies where it redirects to
  _changePage(){
      this.props.navigator.push({ name: 'whoToShare' });
  }
  //resets state after swipe or button push
  _resetState(liked){
    const { currentCard, currentDeck, changeCardSwipe, cameraMode } = this.props;
    // this.props.toggleLikeClick(liked);
    this.state.pan.setValue({x: 0, y: 0});
    this.state.enter.setValue(0);
    if(liked !== undefined){liked ? this.props.toggleLikeTrue(this.props.currentCard) : this.props.toggleLikeFalse(this.props.currentCard);}
    if (liked && cameraMode) {
      helpers.sendToS3(s3Cred, RNS3, currentCard, currentDeck[currentCard].uri, this.props.changeLocAfterUpload );
    }
    if(currentCard < currentDeck.length - 1) {
      changeCardSwipe();
      this._animateEntrance();
    } else {
        this._changePage();
    }
  }

  //renders user view for card swiping
  render() {
    const { pan, enter } = this.state;
    const { currentDeck, currentCard, cameraMode, togglePickTrue, togglePickFalse, deleteCard, prevCard } = this.props;

    let [translateX, translateY] = [pan.x, pan.y];
    let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]});
    let opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5]});
    let scale = enter;
    let animatedCard = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};

    return (
      <View style={styles.container}>
      {/*ternary to display yelp logo if yelp searching, otherwise photos*/}
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
      {/*ternary to display yelp cards or image cards*/}
        <Animated.View style={[styles.swipeCard, animatedCard]} {...this._panResponder.panHandlers}>
          {cameraMode === false ?
            <Card business={currentDeck[currentCard]} /> :
            <ImageCard img={currentDeck[currentCard]} />
          }
        </Animated.View>
        {/*buttons with same functionality as swipe*/}
        <View style={styles.swipeBtns}>
          <TouchableOpacity
            style={styles.leftSwipeBtn}
            onPress={() => { if(cameraMode){togglePickFalse(currentCard);}{this._resetState(false)}}}>
            <Text style={styles.swipeBtnText}>LEFT</Text>
          </TouchableOpacity>
          {!cameraMode ?
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => { if(!cameraMode){deleteCard(currentCard);prevCard();}{this._resetState()}}}>
            <Text style={styles.swipeBtnText}>DELETE</Text>
          </TouchableOpacity> : <View style={styles.spacing}></View>
          }
          <TouchableOpacity
            style={styles.rightSwipeBtn}
            onPress={() => { if(cameraMode){togglePickTrue(currentCard);}{this._resetState(true)}}}>
            <Text style={styles.swipeBtnText}>RIGHT</Text>
          </TouchableOpacity>
        </View>


      </View>
    )
  }
}
