import React, { Component } from 'react';
import { 
  View, 
  TextInput,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from '../assets/styles';

export default class FriendsListComponent extends Component {
  render() {
    const { users } = this.props;
    return (
      <View style={styles.container}>
        <Text>Friends List</Text>
        {users.map((user) => {return <Text key={user.user_id}>{user.email}</Text>})}
      </View>
    )
  }
}

