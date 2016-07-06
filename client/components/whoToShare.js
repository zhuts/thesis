import React, { Component } from 'react';
import { 
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import _ from 'underscore';
import helpers from '../util/helpers';

export default class WhoToShare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      name: ''
    }
  }
  
  addToSelected(friend) {
    let selected = this.state.selected;
    const index = _.findIndex(selected, (user) => user.user_id === friend.user_id);
    if(index === -1) {
      selected = [...this.state.selected, friend]
    } else {
      selected.splice(index, 1);
    }
    this.setState({
      selected: selected
    })
  }
  
  render() {
    const { user_id, friends, currentDeck, navigator, resetCurrentDeck } = this.props;
    const display = _.reject(friends, (friend) => friend.user_id === user_id);
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.share}>Give your deck a name</Text>
          <TextInput 
            style={styles.input}
            autoCapitalize='none'
            maxLength={20}
            value={this.state.name}
            onChangeText={(name) => { this.setState({name: name}) }}
          />
        </View>
        
        <Text style={styles.share}>Who Would You Like to Share With?</Text>
        <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
          <ScrollView
            style={{height: 400}}
            automaticallyAdjustContentInsets={false}    
            scrollEventThrottle={200}
          >
            {display.map((friend, i) => {
              return (
                <View style={this.state.selected.indexOf(friend) === -1 ? styles.userContainer : [styles.userContainer, styles.userSelected]} key={i}>
                  <Image 
                    source={{uri: friend.picture}}
                    style={{height: 40, width: 40}}
                  />
                  <TouchableHighlight
                    style={styles.user}
                    underlayColor={'lightgreen'}
                    onPress={() => { this.addToSelected(friend) }}>
                    <Text>{ friend.email }</Text>
                  </TouchableHighlight>
                </View>
              )
            })}
          </ScrollView>
        </View>
        
        <TouchableOpacity
          style={[styles.share, styles.shareButton]}
          onPress={() => {
            if(currentDeck.length > 0 && !!currentDeck[0].id) {
              helpers.postDeck(user_id, this.state.name, currentDeck, this.state.selected, 'yelp', () => {
                console.log('deck has been uploaded');
              })
            } else {
              helpers.postDeck(user_id, this.state.name, currentDeck, this.state.selected, null, () => {
                console.log('deck has been uploaded');
              })
            }
            this.setState({
              selected: [],
              name: ''
            });
            navigator.push({ name: 'splash' });
          }}
        >
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 10,
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5,
  },
  user: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    height: 40,
  },
  userSelected: {
    borderWidth: 2,
    borderColor: 'green'
  },
  input: {
    padding: 5,
    height: 40,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5,
    margin: 4
  },
  share: {
    alignSelf: 'center',
    padding: 5,
    margin: 10,
  },
  shareButton: {
    borderRadius: 50,
    padding: 20,
    backgroundColor: 'lightblue',
    marginBottom: 20,
  },
})