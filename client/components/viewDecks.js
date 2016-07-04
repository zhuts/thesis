import React, { Component } from 'react';
import { 
  View, 
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Card from './viewCard';
import helpers from '../util/helpers';

export default class ViewDecks extends Component {
  
  componentDidMount() {
    const { setUserDecks, setSharedDecks } = this.props;
    const userid = '11111' // should come from profile objects in state
    
    helpers.getUserCreatedDecks(userid, (userDecks) => {
      setUserDecks(userDecks);
    });
    helpers.getUserSharedDecks(userid, (sharedDecks) => {
      setSharedDecks(sharedDecks);
    })
  }
  
  renderUserDecks() {
    const { userDecks, setCurrentViewDeck, navigator } = this.props;
    const userid = '11111' // should come from profile objects in state
    
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
        <Text>You have not created an decks OR Loading...</Text>  
      )
    }
  }
  
  renderSharedDecks() {
    const { sharedDecks, setCurrentViewDeck, navigator } = this.props;
    const userid = '11111' // should come from profile objects in state
    
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
  
  render() {
    return (
      <View style={[styles.container, {borderColor: 'red', borderWidth: 2}]}>
        <View style={styles.decks}>
          <Text>You Created: </Text>
          {this.renderUserDecks()}
        </View>
        
        <View style={styles.decks}>
          <Text>Shared Decks: VOTE!</Text>
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
    margin: 5,
  },
  scrollView: {
    height: 220,
  },
});
