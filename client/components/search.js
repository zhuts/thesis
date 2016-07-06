import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Image,
  Slider,
  StyleSheet
} from 'react-native';
import helpers from '../util/helpers';
import * as actions from '../actions/actions';
import styles from '../assets/styles';

export default class SearchComponent extends Component {

  onSearch(term, location) {
    const { navigator, buildDeckYelp, cameraModeOff, num } = this.props;
    if (term !== '' && location !== '') {
      helpers.searchYelp(term, location, (yelpData) => {
        let data = yelpData.map( (business) => {
          return {
            ...business,
            like: undefined
          }
        });
        data = data.slice(0, num);
        buildDeckYelp(data);
        cameraModeOff();
        navigator.push({ name: 'deckView' });
      });
    }
  }

  render() {
    const { term, location, searchTerm, searchLocation, onSearch, numOfCards } = this.props;
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
          <Image
            source={require('../assets/yelp-logo-large.png')}
            style={{width: 166, height: 40, padding: 40}}
          />
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

          <View>
            <Text>
              Number of Options: {this.props.num}
            </Text>
            <Slider
              minimumValue={2}
              maximumValue={20}
              value={10}
              step={1}
              onValueChange={(value) => numOfCards(value)}
            />
          </View>

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
