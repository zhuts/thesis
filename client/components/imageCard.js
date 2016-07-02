  import React, { Component } from 'react';
  import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    CameraRoll
  } from 'react-native';
  import { connect } from 'react-redux';
  import * as actions from '../actions/actions';

  class ImageCard extends Component {

    constructor(props){
      super(props);
    }
    storeImages(data) {
      const { buildImageDeck, doneLoading } = this.props;
      const assets = data.edges;
      const pics = assets.map( asset => asset.node.image )
      console.log(images);
      const images = pics.map( (image) => {
        return {
          ...image,
          like: undefined
        }
      });
      buildImageDeck(images);
      doneLoading();
        //here we have a deck of images created and assigned to the state
    }
    logImageError(err) {
       console.log(err);
    }
    componentWillMount() {
      const fetchParams = {
          first: this.props.numOfPics,
      };
      CameraRoll.getPhotos(fetchParams)
        .then((data) => this.storeImages(data), (e) => this.logImageError(e));
    }
    render() {
      // IMAGECARD COMPONENT EXPECTS PROPS CALLED IMAGE TO BE PASSED TO IT
      const { img, isLoading } = this.props;
      console.log(this.props);
      return (
        <View style={styles.container}>
         {isLoading ?
          <Text>Loading</Text> :
          <Image style={styles.image} source={{uri:img.uri}}/>
         }
        </View>
      );
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      height: 300,
      width: 300
    }
  })

  export default ImageCard;
