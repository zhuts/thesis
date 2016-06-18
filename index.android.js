import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  Animated,
  PanResponder
} from 'react-native';
import DeckView from './client/components/deck_view'

AppRegistry.registerComponent('thesis', () => DeckView);
