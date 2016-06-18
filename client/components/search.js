import React, { Component } from 'react';
import { 
  View, 
  TextInput,
  Text,
  TouchableHighlight, 
  StyleSheet 
} from 'react-native';
import Yelp from '../util/yelpApi';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 5,
    height: 40,
    width: 200,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5
  }
})

export default class SearchComponent extends Component {
  
  constructor() {
    super(props);
    this.state({
      search: '',
      location: ''  
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.search}
          onChangeText={(text) => this.setState({search: text})}
        />
        <TextInput
          style={styles.input}
          value={this.state.location}
          onChangeText={(text) => this.setState({location: text})}
        />
        
        <TouchableHighlight
          onPress={Yelp(this.state.search, this.state.location)}
        >
          <Text>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

