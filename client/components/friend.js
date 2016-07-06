import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableHighlight, 
  StyleSheet 
} from 'react-native';
import * as action from '../actions/actions';
import helpers from '../util/helpers';

export default class Friend extends Component {
  // will render a friend component after the user adds another user from the 'user list'
  // the friend component has a 'delete' function so that the friend can be taken out when the user presses on a friend in the 'friend list'
  render() {
    const { id, friends, friend, profile, removeFriend, addFriend } = this.props;
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: friend.picture}}
          style={{height: 40, width: 40}}
        />
        <TouchableHighlight
          style={styles.user}
          underlayColor={'lightgreen'}
          onPress={() => {
            helpers.removeFriend((friends) => {addFriend(friends)}, profile.userId, friend);
          }}
        >
          <Text style={{marginLeft: 5}}>{ friend.email }</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5,
  },
  user: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    height: 40,
  }
})