import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableHighlight, 
  StyleSheet 
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';


class Card extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    // CARD COMPONENT EXPECTS PROPS CALLED BUSINESS TO BE PASSED TO IT
    const { business } = this.props;
    return (
      <View style={styles.container}>
        <Image 
          source={{ uri: business.image_url }}
          style={{width: 320, height: 320}}
        />
        
        <Text style={{fontSize: 35}}>
          { business.name }
        </Text>
        
        <Image 
          source={{ uri: business.rating_img_url_large }} 
          style={{width: 166, height: 30}}
        />
        
        <Text style={styles.business}>
          { business.review_count } Reviews
        </Text>
        
        <Image source={ require('../assets/yelp') } />
        
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
  business: {
    fontSize: 30,
  }
})

export default Card;

