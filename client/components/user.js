import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableHighlight, 
  StyleSheet 
} from 'react-native';
import * as action from '../actions/actions';


export default class User extends Component {
  componentDidMount() {
    const { id, user, users, addFriend } = this.props;
    console.log(this.props);
  }

  render() {
    const { id, user, users, addFriend } = this.props;
    return (
      <TouchableHighlight
        style={styles.user}
        underlayColor={'lightgreen'}
        onPress={() => {addFriend(users, id)}}
      >
        <Text>{ user.email }</Text>
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