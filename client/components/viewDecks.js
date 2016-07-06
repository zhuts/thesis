import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Card from './viewCard';
import helpers from '../util/helpers';

export default class ViewDecks extends Component {
  
  componentDidMount() {
    const { fetchUserDecks, fetchSharedDecks } = this.props;
    const userid = this.props.user_id || '11111';
    fetchUserDecks(userid);
    fetchSharedDecks(userid);
  }
  
  renderUserDecks() {
    const { userDecks, setCurrentViewDeck, navigator } = this.props;
    const userid = this.props.user_id || '11111';
    
    if( userDecks.length > 0 ) {
      return (
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}>
          {userDecks.map( deck => {
            return (
              <Card 
                key={deck._id} 
                deck={deck}
                user_id={userid}
                setCurrentViewDeck={setCurrentViewDeck} 
                created={'user'}
                navigator={navigator}/>  
            )
          })}
        </ScrollView>
      )
    } else {
      return (
        <Text>You have not created any decks OR Loading...</Text>  
      )
    }
  }
  
  renderSharedDecks() {
    const { sharedDecks, setCurrentViewDeck, navigator } = this.props;
    const userid = this.props.user_id || '11111';
    
    if( sharedDecks.length > 0 ) {
      return (
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          automaticallyAdjustContentInsets={false}    
          scrollEventThrottle={200}>
          {sharedDecks.map( deck => {
            return (
              <Card 
                key={deck._id} 
                deck={deck} 
                user_id={userid}
                setCurrentViewDeck={setCurrentViewDeck} 
                created={'shared'}
                navigator={navigator}/>  
            )
          })}
        </ScrollView>
      )
    } else {
      return (
        <Text>No decks have been shared with you OR Loading...</Text>  
      )
    }
  }
  
  renderYelpLogo() {
    return <Image 
      source={require('../assets/yelp-logo.small.png')} 
      style={styles.img}/>
  }
  
  render() {
    return (
      <View style={[styles.container]}>
        {this.renderYelpLogo()}
        <View style={styles.decks}>
          <Text>You Created: </Text>
          {this.renderUserDecks()}
        </View>
        
        <View style={styles.decks}>
          <Text>Shared Decks: VOTE or see the top result!</Text>
          {this.renderSharedDecks()}
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop: 60,
    marginBottom: 40,
  },
  decks: {
    height: 250,
    padding: 5,
    margin: 2,
  },
  scrollView: {
    height: 220,
  },
  img: {
    marginRight: 5,
    alignSelf: 'flex-end',
  },
});
