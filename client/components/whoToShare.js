import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableHighlight, 
  StyleSheet,
  ScrollView
} from 'react-native';
import * as action from '../actions/actions';
import Friend from './friend';

export default class WhoToShare extends Component {
  render() {
    const { addToShared, removeFromShared, friends } = this.props;
    return(
      <View style={styles.container}>
        <Text>Who Would You Like to Share With?</Text>
        <ScrollView
          style={[styles.userView]}
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}    
          scrollEventThrottle={200}
        >
        {friends.map((friend, i) => {return (
          <TouchableHighlight
            key={i}
            style={styles.user}
            underlayColor={'lightgreen'}
            onPress={() => {addToShared(friend)}}
          >
            <Text>{ friend.email }</Text>
          </TouchableHighlight>
          )})}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 70
  },
  userView: {
    marginTop: 5,
    height: 25,
    borderColor: 'blue'
  },
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