import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableHighlight, 
  StyleSheet,
  ScrollView
} from 'react-native';
import User from './user';
import Friend from './friend';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
// import styles from '../assets/styles';

export default class FriendsListComponent extends Component {
  constructor(props) {
    super(props)
  }
  // the friend list component contains two lists: one for all the users that exist in the database
  // and another for the friends that the user currently logged in has
  render() {
    const { users, friends, addFriend, removeFriend, profile, addToShared, getFriends } = this.props;
    const sortedFriends = friends.sort( (a,b) => a.email > b.email );
    const sortedUsers = users.sort( (a,b) => a.email > b.email );
    return (
      <ScrollableTabView
        style={{marginTop: 20, }}
        initialPage={0}
        tabBarPosition={"bottom"}
        renderTabBar={() => <ScrollableTabBar />}
        scrollWithoutAnimation={true}
      >
      
        <View tabLabel='Friends' style={styles.container}>
          <Text style={styles.header}>Friends</Text>
          <ScrollView
            style={[styles.userView]}
            automaticallyAdjustContentInsets={false}    
            scrollEventThrottle={200}
          >
            {sortedFriends.map((friend, i) => {
              return (
                <Friend
                  key={i}
                  friends={friends} 
                  friend={friend}
                  id={friend.user_id}
                  profile={profile}
                  removeFriend={removeFriend}
                  addFriend={addFriend}
                />
              )
            })}
          </ScrollView>
        </View>
        
        <View tabLabel='Users' style={styles.container}>
          <Text style={styles.header}>Users</Text>
          <ScrollView
            style={[styles.userView]}
            automaticallyAdjustContentInsets={false}    
            scrollEventThrottle={200}
          >
            {sortedUsers.map((user, i) => {
              console.log('user is called');
              return (
                <User
                  key={i}
                  users={users}
                  user={user} 
                  id={user.user_id}
                  profile={profile}
                  addFriend={addFriend} 
                />
              )
            })}
          </ScrollView>
        </View>
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 60,
  },
  userView: {
    height: 400,
  },
  header: {
    alignSelf: 'center'
  },
})
