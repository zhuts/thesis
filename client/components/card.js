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

// sample data from Yelp

const business = {
  "rating": 4.0, 
  "mobile_url": "http://m.yelp.com/biz/craft-los-angeles?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=M4AdD43rFrwW8bBM84G3cw", 
  "rating_img_url": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/c2f3dd9799a5/ico/stars/v1/stars_4.png", 
  "review_count": 1415, 
  "name": "Craft", 
  "rating_img_url_small": "https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png", 
  "url": "http://www.yelp.com/biz/craft-los-angeles?utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=M4AdD43rFrwW8bBM84G3cw", 
  "categories": [
      [
          "American (New)", 
          "newamerican"
      ]
  ], 
  "snippet_text": "My husband and I suddenly found ourselves heading to Century City for a last minute dinner with his father. I looked up places to eat and knew this was one...", 
  "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/R2UOk6I-VFTHueU0FOCD5Q/ms.jpg", 
  "snippet_image_url": "http://s3-media4.fl.yelpcdn.com/photo/qykB08rPgTV6615RWSzlBg/ms.jpg", 
  "display_phone": "+1-310-279-4180", 
  "rating_img_url_large": "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png", 
  "menu_provider": "single_platform", 
  "location": {
      "city": "Los Angeles", 
      "display_address": [
          "10100 Constellation Blvd", 
          "Century City", 
          "Los Angeles, CA 90067"
      ], 
      "coordinate": {
          "latitude": 34.0590079, 
          "longitude": -118.4151381
      }, 
  }
}

class Card extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    // CARD COMPONENT EXPECTS PROPS CALLED BUSINESS TO BE PASSED TO IT
    const { business } = this.props;
    return (
      <View style={styles.container}>
        
        
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
/*export default connect(
  (state) => {
    return {
      //currentCard: state.currentCard
    }
  }
)(Card);*/

