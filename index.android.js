/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var mockCard = [
  {searchParam:"Puppies"}
];

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

class thesis extends React.Component{
  render() {
    return (
      <View className="fullscreen">
        <searchResults />
        <swipeCard />
        <leftSwipeBtn />
        <rightSwipeBtn />
      </View>
    )
  }
}

class SearchResults extends React.Component{
  render() {
    return (
      <Text></Text>
    )
  }
}

class SwipeCard extends React.Component{
  render() {
    return (
      <View>
        <cardTitle />
        <cardPic />
      </View>
    )
  }
}

class CardTitle extends React.Component{
  render() {
    return (
      <Text></Text>
    )
  }
}

class CardPic extends React.Component{
  render() {
    return (
      <View className="card-img"></View>
    )
  }
}

class LeftSwipeBtn extends React.Component{
  render() {
    return (
      <button></button>
    )
  }
}

class RightSwipeBtn extends React.Component{
  render() {
    return (
      <button></button>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('thesis', () => thesis);
