import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  Animated,
  PanResponder,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../actions/actions';

class deckViewNew extends React.Component{
  render() {
          // <Text style={styles.cardTitleStyle}>{mock.cardTitle}</Text>
          // <Image style={styles.cardPicStyle} source={{uri: 'mock.cardPic'}} />
    return (
      <View style={styles.container}>
        <View style={styles.searchResultsContainer}>
          <Text style={styles.searchResults}>{this.props.searchParam.term}</Text>
        </View>
        <Animated.View style={[styles.swipeCard]}>

        </Animated.View>

        <View style={styles.leftSwipeBtn}>
          <Text>LEFT</Text>
        </View>

        <TouchableOpacity 
          style={styles.rightSwipeBtn}
          onPress={() => this.props.toggleLikeClick(this.props.currentCard)}>
          <Text>RIGHT</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3FCFF'
  },
  searchResultsContainer:{
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
    borderWidth: 5,
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
    width: 200,
    height: 200
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
  }
});

function mapStateToProps(state) {
  return { 
    searchParam: state.search,
    currentCard: state.currentCard,
    currentDeck: state.currentDeck
  }
};

function mapDispatchToProps(dispatch) {
  return {
    toggleLikeClick: (id) => { dispatch(action.toggleLike(id, true)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(deckViewNew);