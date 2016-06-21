import React, { Component } from 'react';
import { 
  View, 
  TextInput,
  Text,
  TouchableHighlight, 
  StyleSheet 
} from 'react-native';
// import Yelp from '../util/yelpAPI';


export default class SearchComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      location: ''  
    }
  }
  
  onSearch(term, location) {
    // console.log(term, location);
    // this.setState({
    //   search: '',
    //   location:''
    // })
    if (this.state.search !== '' && this.state.location !== '') {
      this.props.navigator.push({ name: 'deckView' });
    }
    
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.label}>Search</Text>
          <TextInput
            style={styles.input}
            value={this.state.search}
            onChangeText={(text) => this.setState({search: text})}
          />
          
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            value={this.state.location}
            onChangeText={(text) => this.setState({location: text})}
          />
          
          <TouchableHighlight
            style={styles.search}
            underlayColor={'lightblue'}
            onPress={() => {this.onSearch(this.state.search, this.state.location)}}
          >
            <Text>Build</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 5,
    height: 40,
    width: 200,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5,
    margin: 4
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    height: 40,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10
  },
  label: {
    
  }
})
