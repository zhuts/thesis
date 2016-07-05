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
// import Card from './card';
import * as action from '../actions/actions';
import styles from '../assets/styles';
import helpers from '../util/helpers';
import _ from 'underscore';

let SWIPE_THRESHOLD = 120;

export default class viewDeckSwipe extends Component{
  
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
          this._resetState()
        } 
        Animated.spring(this.state.pan, {
          toValue: 0
        });    
      },
    })
  }
  
  _resetState(liked){
    const { currentViewCard, currentViewDeck, changeCurrentViewCard, resetCurrentViewCard, navigator, fetchUserDecks, fetchSharedDecks } = this.props;
    const userid = this.props.user_id || '11111';
    
    this.state.pan.setValue({x: 0, y: 0});
    this.state.enter.setValue(0);
    if(liked !== undefined) {
      const deckid = currentViewDeck._id;
      const cardid = currentViewDeck.deck[currentViewCard]._id;
      // console.log('deckid', deckid, 'cardid', cardid);
      helpers.updateLikeCount(deckid, cardid, (response) => {
        console.log(response);
      });
    }
    if(currentViewCard < currentViewDeck.deck.length - 1) {
      changeCurrentViewCard();
      this._animateEntrance();
    } else {
      const deckid = currentViewDeck._id;
      const swiped = _.find(currentViewDeck.shared, (user) => {
        return user.user_id === userid;
      });
      // console.log('deckid', deckid, 'userid', swiped._id)      
      helpers.updateSwipeStatus(deckid, swiped._id, (response) => {
        console.log(response);
        fetchSharedDecks(userid, function() {
          console.log('fetched');
        });
        resetCurrentViewCard();
      });
      navigator.immediatelyResetRouteStack([{ name: 'saved' }]);
    }
  }
  
  renderYelp() {
    const { currentViewDeck } = this.props;
    console.log(currentViewDeck.type);
    if(currentViewDeck.type === 'yelp') {
      return (
        <View style={styles.searchResultsContainer}>
          <Image 
            source={require('../assets/yelp-logo-medium.png')}/>
        </View>
      )
    }
  }
  
  renderCards() {
    const { pan, enter } = this.state;
    const { currentViewDeck, currentViewCard } = this.props;
    let [translateX, translateY] = [pan.x, pan.y];
    let rotate = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: ["-30deg", "0deg", "30deg"]});
    let opacity = pan.x.interpolate({inputRange: [-200, 0, 200], outputRange: [0.5, 1, 0.5]});
    let scale = enter;
    let animatedCard = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};
    
    return (
      <Animated.View style={[styles.swipeCard, animatedCard]} {...this._panResponder.panHandlers}>
        <ViewDeckSwipeCard card={currentViewDeck.deck[currentViewCard]} deck={currentViewDeck}/>
      </Animated.View>
    )
  }

  render() {    
    return (
      <View style={[styles.container, {marginTop: 60}]}>
        { this.renderYelp() }
        { this.renderCards() }
      </View>
    )
  }
}

class ViewDeckSwipeCard extends Component {
  renderYelp() {
    const { deck, card } = this.props;
    if(deck.type === 'yelp') {
      return (
        <View>
          <Image 
            source={{ uri: card.rating_img_url_large }} 
            style={{width: 166, height: 30}}
          />
          
          <Text style={styles.business}>
            { card.review_count } Reviews
          </Text>
        </View>
      )
    }
  }
  render() {
    const { deck, card } = this.props;
    console.log(card);
    return (
      <View style={styles.container}>
        <Image style={{height: 300, width: 300}} source={{uri:card.image_url}} />
        <Text style={{fontSize: 35}}>
          { card.name }
        </Text>
        { this.renderYelp() }
      </View>
    )
  }
}
