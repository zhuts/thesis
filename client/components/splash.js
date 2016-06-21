import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableHighlight, 
  StyleSheet 
} from 'react-native';

export default class SplashComponent extends Component {
  constructor(props) {
    super(props);
  }
  toSearch() {
    this.props.navigator.push({ name: 'search' });
  }
  toSwipe() {
    this.props.navigator.push({ name: 'deckView' });
  }
  toResult() {
    this.props.navigator.push({ name: 'results' });
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.heading}>APEX SWIPE</Text>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            underlayColor={'lightblue'}
            onPress={() => {this.toSearch()}}
           >
            <Text>Search</Text>
          </TouchableHighlight>    
          <TouchableHighlight
            style={styles.button}
            underlayColor={'lightblue'}
            onPress={() => {this.toSwipe()}}
          >
            <Text>Swipe</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor={'lightblue'}
            onPress={() => {this.toResult()}}
          >
            <Text>Results</Text>
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
  heading: {
    textAlign: 'justify',
    fontFamily: 'Verdana',
    padding: 20,
    fontSize: 30
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 300,
    height: 75,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10
  }
})