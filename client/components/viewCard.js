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
    const userOrShared = created;
    let swiped = false;
    setCurrentViewDeck(deck);
    if(userOrShared === 'user') {
      navigator.push({name: 'viewDeckResult'})
    } else {
      swiped = _.find(deck.shared, (user) => {
        return user.user_id === user_id;
      });
      console.log('swiper', swiped);
      
      if(swiped.swiped === false) {
        console.log('swiper');
        navigator.push({name: 'viewDeckSwipe'})
      }
    }
  }
  
  render() {
    const { deck } = this.props;
    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => { this.setCurrentDeck(deck) }}
        >
          <Image 
            style={styles.img}
            source={{uri: deck.deck[0].imageUrl}} />
          <Text>{deck.name}</Text>
        </TouchableOpacity>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 200,
    padding: 5,
    margin: 5,
  },
  img: {
    height: 160,
    borderRadius: 5, 
  },
})