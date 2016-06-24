import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Nav from './components/nav';
import configure from './store/configureStore';
const store = configure();

// testing the store => remove later
store.subscribe( () => {
  console.log('new state', store.getState());
})

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    )
  }
}
