import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';
import helpers from '../util/helpers'

export default class SplashComponent extends Component {
  componentDidMount() {
    const { getUsers, getFriends, profile } = this.props;
    helpers.getUsers((users) => {getUsers(users)});
    helpers.getFriends((friends) => {getFriends(friends)}, profile.userId);
  }

  constructor(props) {
    super(props);
  }

  navigate(destination) {
    this.props.navigator.push({ name: destination });
  }
//          if (currentDeck.length !== 0 && !cameraMode) {
  //renders home screen, each button is self explanatory
  render() {
    const { currentDeck, cameraMode } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../img/background.jpg')}  style={styles.backgroundImage}>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            underlayColor={'lightblue'}
            onPress={() => {this.navigate('search')}}
           >
            <Text style={styles.text}>Build Yelp Deck</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor={'lightblue'}
            onPress={() => {{this.props.resetCurrentDeck()}{this.props.resetCardCount()}{this.navigate('camera')}}}
          >
            <Text style={styles.text}>Camera</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor={'lightblue'}
            onPress={() => {{this.props.cameraModeOn()}{this.navigate('deckView')}}}
          >
            <Text style={styles.text}>Build Picture Deck</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.friend}
            underlayColor={'lightblue'}
            onPress={() => {this.navigate('friends')}}
          >
            <Text style={styles.text2}>Friends List</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.saved}
            underlayColor={'lightblue'}
            onPress={() => {this.navigate('saved')}}
          >
            <Text style={styles.text2}>View Decks</Text>
          </TouchableHighlight>
        </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    textAlign: 'justify',
    fontFamily: 'Verdana',
    padding: 20,
    fontSize: 30
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 300,
    height: 75,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: 'white'
  },
  friend: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 110,
    height: 75,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    left: 20,
    backgroundColor: 'white'
  },
  saved: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 110,
    height: 75,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    right: 20,
    backgroundColor: 'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
})
