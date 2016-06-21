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
import DeckView from './client/components/deck_view';
import Main from './client/main';

AppRegistry.registerComponent('thesis', () => DeckView);
