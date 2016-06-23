import React, { Component } from 'react';
import { 
  View, 
  TextInput,
  Text,
  TouchableHighlight, 
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image
} from 'react-native';
import Card from './card';
import { connect } from 'react-redux';
import helpers from '../util/helpers';
import * as actions from '../actions/actions';

class SavedComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var _scrollView: ScrollView;
    const { currentDeck, navigator } = this.props;
    
    return (  
      <View style={styles.container}>
        
        <View style={styles.navigation}>
          <TouchableHighlight
            style={styles.back}
            underlayColor={'lightblue'}
            onPress={() => { navigator.push({ name: 'splash' }) }}
           >
            <Text>Back</Text>
          </TouchableHighlight>
          
          <Image
            style={styles.logo}
            source={require('../assets/yelp-logo-large.png')}
          />
        </View>
        
        <ScrollView
          style={[styles.scrollView]}
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}    
          scrollEventThrottle={200}
        >
          {currentDeck.map(createCard)}
        </ScrollView>
        
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => { _scrollView.scrollTo({y: 0}); }}
        >
          <Text>Scroll to top</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

     
class ScrollCard extends Component {
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

const createCard = (business, i) => <ScrollCard key={i} business={business} />;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigation: {
    padding: 20
  },
  logo: {
    alignSelf: 'center'
  },
  back: {
    width: 60,
    height: 20,
    alignItems: 'center',
    borderColor: 'blue', 
    borderWidth: 1,
    borderRadius: 5,
  },
  scrollView: {
    backgroundColor: '#009900',
    marginTop: 10,
    height: 400
  },
  button:  {
    flexDirection: 'row', 
    height: 200,
    margin: 7,
    padding: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 3,
    alignItems: 'stretch'
  },
  topButton: {
    height: 40,
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 3,
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
const mapStateToProps = (state) => {
  return {
    currentDeck: state.currentDeck
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (term) => {dispatch(actions.searchTerm(term))},
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedComponent);