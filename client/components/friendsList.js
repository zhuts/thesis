import React, { Component } from 'react';
import { 
  View, 
  TextInput,
  Text,
  TouchableHighlight, 
  StyleSheet 
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
})