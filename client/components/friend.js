import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableHighlight, 
  StyleSheet 
} from 'react-native';
import * as action from '../actions/actions';

export default class Friend extends Component {
  sendDeck() { 
    const { addToShared, friend } = this.props;
    addToShared(friend);
  }

  render() {
    const { id, friend } = this.props;
    return (
      <TouchableHighlight
        style={styles.user}
        underlayColor={'lightgreen'}
        onPress={() => {this.sendDeck()}}
      >
        <Text>{ friend.email }</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  user: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: 40,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 10
  }
})