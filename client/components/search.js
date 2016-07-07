import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  Image,
  Slider,
  StyleSheet
} from 'react-native';
import helpers from '../util/helpers';
import * as actions from '../actions/actions';
import styles from '../assets/styles';

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  onSearch(term, location) {
    const { navigator, buildDeckYelp, cameraModeOff, num } = this.props;
    if (term !== '' && location !== '') {
      this.setState({loading: true});
      helpers.searchYelp(term, location, (yelpData) => {
        this.setState({loading: false});
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
  
  renderLoad() {
    if(this.state.loading) {
      return (
        <ActivityIndicator style={{width: 30, marginTop: 10}}/>
      )
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
          <TextInput
            autoCapitalize='none'
            style={styles.input}
            value={term}
            placeholder={'search'}
            onChangeText={(text) => { searchTerm(text) }}
          />

          <TextInput
            autoCapitalize='none'
            style={styles.input}
            value={location}
            placeholder={'location'}
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
          
          {this.renderLoad()}
          
        </View>
      </View>
    );
  }
}
