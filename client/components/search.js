import React, { Component } from 'react';
import { 
  View, 
  TextInput,
  Text,
  TouchableHighlight
} from 'react-native';
import helpers from '../util/helpers';
import * as actions from '../actions/actions';
import styles from '../assets/styles';

export default class SearchComponent extends Component {
  
  onSearch(term, location) {
    const { navigator, buildDeckYelp } = this.props;
    if (term !== '' && location !== '') {
      helpers.searchYelp(term, location, (yelpData) => {
        const data = yelpData.map( (business) => { 
          return {
            ...business,
            like: undefined
          }
        });
        buildDeckYelp(data);
        navigator.push({ name: 'deckView' });
      });
    }
  }

  render() {
    const { term, location, searchTerm, searchLocation, onSearch } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.back}
          underlayColor={'lightblue'}
          onPress={() => { this.props.navigator.pop() }}
        >
          <Text>Back</Text>
        </TouchableHighlight>
        <View style={styles.container}>
          <Text style={styles.label}>Search</Text>
          <TextInput
            style={styles.input}
            value={term}
            onChangeText={(text) => { searchTerm(text) }}
          />
          
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={(location) => { searchLocation(location) }}
          />
          
          <TouchableHighlight
            style={styles.search}
            underlayColor={'lightblue'}
            onPress={() => { this.onSearch(term, location) }}
          >
            <Text>Build</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}





