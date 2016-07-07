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
  componentDidMount() {
    console.log(this.props);
  }
  
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
        { type === 'yelp' ? <Image 
            style={created === 'shared' && swiped.swiped ? styles.swiped : styles.img}
            source={{uri: deck.deck[0].image_url}}>
            <Image style={styles.yelpSmall} source={require('../assets/yelp-logo-small.png')} /> 
          </Image> : <Image 
            style={created === 'shared' && swiped.swiped ? styles.swiped : styles.img}
            source={{uri: deck.deck[0].image_url}}/> }
          <Text>{deck.name}</Text> 
          <Text>
            { created === 'user' ? 'Click to see Results' : 
              swiped.swiped ? 'You voted! Click to see results' : 'Click to Vote!'
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
  img: {
    height: 160,
    width: 160,
    borderRadius: 5,
  },
  swiped: {
    height: 160,
    width: 160,
    borderRadius: 5,
    opacity: .50,
  },
  yelp: {
    height: 160,
  },
  yelpSmall: {
    width: 100,                                                                                                                                                                                                   
    height: 50,                                                                                                                                                                                                  
    top: 10, 
    left: 10,                                                                                                                                                                                                    
  }
})