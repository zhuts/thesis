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
  
  onSearch(term, location) {
    
    const { navigator, buildDeck } = this.props;
    
    if (term !== '' && location !== '') {
      helpers.searchYelp(term, location, (yelpData) => {
        const data = yelpData.map( (business) => { 
          return {
            ...business,
            like: undefined
          }
        });
        buildDeck(data);
        navigator.push({ name: 'deckView' });
      });
    }
  }
  
  render() {
    
    const { term, location, searchTerm, searchLocation } = this.props;
    
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
            onPress={() => {this.onSearch(term, location)}}
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
    justifyContent: 'center',
    padding: 20
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
  back: {
    width: 60,
    height: 20,
    alignItems: 'center',
    alignSelf: 'flex-start', 
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
  },
})

const mapStateToProps = (state) => {
  return {
    term: state.search.term,
    location: state.search.location
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (term) => {dispatch(actions.searchTerm(term))},
    searchLocation: (location) => {dispatch(actions.searchLocation(location))},
    buildDeck: (data) => {dispatch(actions.buildDeck(data))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

