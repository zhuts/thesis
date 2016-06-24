import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableHighlight, 
  StyleSheet,
  Linking,
  Image
} from 'react-native';

export default class ScrollCard extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    
    const { business } = this.props;
    return (
      <View style={styles.button}>
        <View>
          <Image style={styles.img} source={{uri:business.image_url}} />
        </View>
        
        <View style={styles.description}>
          <Text>{ business.name }</Text>
          <Image style={styles.rating} source={{uri:business.rating_img_url_small}} />
          <Text>{ business.review_count } Reviews</Text>
          <TouchableHighlight
            style={{height: 40}}
            onPress={() => { Linking.openURL(business.url).catch(err => console.error('An error occurred', err)) }}
           >
            <Text>Check Reviews</Text>
          </TouchableHighlight>
          
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  button:  {
    flexDirection: 'row', 
    height: 200,
    margin: 7,
    padding: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 3,
    alignItems: 'stretch'
  },
  img: {
    width: 175,
    height: 175,
  },
  description: {
    flexWrap: 'wrap',
    marginLeft: 10
  },
  rating: {
    width: 50, 
    height: 10
  }
});
