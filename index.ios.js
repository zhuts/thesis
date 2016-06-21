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
import Search from './client/components/search';
import Nav from './client/components/nav'

AppRegistry.registerComponent('thesis', () => Nav);
