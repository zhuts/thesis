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

export default class User extends Component {
  componentDidMount() {
    const { id, user, users, addFriend, profile } = this.props;
    console.log(this.props);
  }

  render() {
    const { id, user, users, addFriend, profile } = this.props;
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: user.picture}}
          style={{height: 40, width: 40}}
        />
        <TouchableHighlight
          style={styles.user}
          underlayColor={'lightgreen'}
          onPress={() => {
            helpers.addFriend((friendsList) => {addFriend(friendsList)}, profile.userId, user);
          }}
        >
          <Text style={{marginLeft: 5}}>{ user.email }</Text>
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