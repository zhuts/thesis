import React, { Component } from 'react';
import { 
  View, 
  TextInput,
  Text,
  TouchableHighlight, 
  StyleSheet 
} from 'react-native';
import { connect } from 'react-redux';
import helpers from '../util/helpers';
import * as actions from '../actions/actions';

class SearchComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      location: ''  
    }
  }
  
  onSearch(term, location) {
    // this.setState({
    //   search: '',
    //   location:''
    // })
    const { dispatch, currentDeck } = this.props;
    if (this.state.search !== '' && this.state.location !== '') {
      helpers.searchYelp(this.state.search, this.state.location, (yelpData) => {
        const data = yelpData.map( (business) => { 
          return {
            ...business,
            like: undefined
          }
        });
        // console.log(data);
        dispatch( actions.buildDeck(data) );
        // console.log('currentDeck', currentDeck);
      });
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

export default connect()(SearchComponent);

