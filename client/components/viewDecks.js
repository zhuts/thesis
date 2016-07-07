import React, { Component } from 'react';
import { 
  ActivityIndicator,
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
        <View style={styles.loading}>
          <ActivityIndicator
            style={styles.spinner}
          />
        </View>
      )
    }
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
        <View style={styles.loading}>
          <ActivityIndicator
            style={styles.spinner}
          />
        </View>
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
      <View style={styles.container}>
        <View style={styles.decks}>
          <Text style={styles.header}>Shared Decks:</Text>
          {this.renderSharedDecks()}
        </View>
        
        <View style={styles.decks}>
          <Text style={styles.header}>You Created:</Text>
          {this.renderUserDecks()}
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
    height: 270,
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 30,
  },
  header: {
    fontSize: 22,
    color: '#002db3',
  },
});
