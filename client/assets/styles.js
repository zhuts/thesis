import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({

  //used in deck_view
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3FCFF'
  },
  searchResultsContainer:{
    flexDirection: 'row',
    position: 'absolute',
    left:0,
    top:0
  },
  searchResults:{
    padding: 30,
    fontSize: 20,
    textAlign: 'left',
    margin: 10
  },
  swipeCard: {
    // borderWidth: 5,
    borderRadius: 5,
    borderColor: '#000',
    width: 300,
    height: 300
  },
  cardTitleStyle:{
    position: 'absolute',
    left:0,
    top:0,
    color: '#888'
  },
  cardPicStyle:{
    width: 300,
    height: 300
  },
  leftSwipeBtn:{
    borderColor: 'red',
    borderWidth: 2,
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    left: 20,
  },
  leftSwipeText:{
  },
  rightSwipeBtn:{
    borderColor: 'green',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    bottom: 20,
    borderRadius: 5,
    right: 20,
  },
  rightSwipeText:{
  },

//used in card
  business: {
    fontSize: 30,
  },
  img: {
    height: 300,
    width: 300
  },

//used in search

  input: {
    padding: 5,
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    margin: 4
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10
  },
  back: {
    width: 60,
    height: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
  },
  slider: {
    height: 10,
    margin: 10,
  },

//used in nav
  navContainer: {
    flex: 1
  },
  title: {
    marginTop:4,
    fontSize:16
  },
  leftNavButtonText: {
    fontSize: 18,
    marginLeft:13,
    marginTop:2
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  nav: {
    height: 60,
    backgroundColor: '#efefef'
  }



});
export default styles
