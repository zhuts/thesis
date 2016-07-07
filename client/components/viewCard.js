import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,
  TouchableOpacity, 
  StyleSheet,
} from 'react-native';
import helpers from '../util/helpers';
import _ from 'underscore';

export default class Card extends Component {

  setCurrentDeck(deck) {
    const { navigator, setCurrentViewDeck, user_id, created } = this.props;
    let swiped = false;
    setCurrentViewDeck(deck);
    if(created === 'user') {
      navigator.push({name: 'results'})
    } else {
      swiped = _.find(deck.shared, (user) => {
        return user.user_id === user_id;
      });
      if(swiped.swiped === false) {
        navigator.push({name: 'viewDeckSwipe'})
      } else {
        navigator.push({name: 'results'});
      }
    }
  }
  
  renderYelp() {
    const { deck } = this.props;
    if(deck.type === 'yelp') {
      return (
        <Image style={styles.yelpSmall} source={require('../assets/yelp-logo-small.png')} /> 
      )
    }
  }
    
  render() {
    const { deck, user_id, created, type } = this.props;
    let swiped = _.find(deck.shared, (user) => {
      return user.user_id === user_id;
    });
    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => { this.setCurrentDeck(deck) }}
        >
          <View style={styles.imgContainer}>
            <Image 
              style={created === 'shared' && swiped.swiped ? [styles.img, styles.swiped] : styles.img}
              source={{uri: deck.deck[0].image_url}}>
            </Image>
            {this.renderYelp()}
          </View>
          <Text style={styles.deckName}>{deck.name}</Text>
          <Text style={styles.action}>
            { created === 'user' ? 'See results' : 
              swiped.swiped ? 'See results' : 'Vote!'
            }
          </Text>
        </TouchableOpacity>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 200,
    padding: 5,
    margin: 2,
    borderRadius: 5,
  },
  imgContainer: {
    position: 'relative', 
    left: 0, 
    top: 0
  },
  img: {
    position: 'relative',
    top: 0,
    left: 0,
    height: 160,
    width: 160,
    borderRadius: 5,
  },
  swiped: {
    opacity: .50,
  },
  yelp: {
    height: 160,
  },
  yelpSmall: {
    position: 'absolute',
    top: 5,
    left: 90,
  },                                                                                                                                                                                             
  deckName: {
    fontSize: 20,
    color: '#3366ff',
  },
  action: {
    fontSize: 12,
  }
})