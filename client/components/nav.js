import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';

// import components for our routes
import Search from './search';
import DeckView from './deck_view';

const Routes = {
  search: Search,
  deckView: DeckView
  // add more routes 'name': component   
}

export default class Nav extends Component {
  renderScene(route, navigator) {
    const Component = Routes[route.name];
    return <Component route={route} navigator={navigator} />
  }
  
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'search'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});