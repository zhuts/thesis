import React, { Component } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
} from 'react-native';

export default class ViewDeckResults extends Component {
  
  renderResults() {
    const { currentViewDeck } = this.props;
    if(!!currentViewDeck) {
      return (
        <Text>Rendering results for deck, {currentViewDeck.name}</Text>
      )
    } else {
      return (
        <Text>Loading...</Text>
      )
    }
  }
  
  render() {
    const { currentViewDeck } = this.props;
    return (
      <View style={styles.container}>
        {this.renderResults()}
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 60,
  },
})