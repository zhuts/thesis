import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Nav from './components/nav';
import configureStore from './store/configureStore';

const store = configureStore()

export default class Main extends Component {
  render() {
    <Provider store={store}>
      <Nav />
    </Provider>
  }
}
