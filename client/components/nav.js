import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';

// import components for our routes
import Search from './search';
import DeckViewNew from './deck_view_new';
import Splash from './splash';
import Results from './saved';

const Routes = {
  search: Search,
  deckView: DeckViewNew,
  results: Results,
  splash: Splash
}

export default class Nav extends Component {
  renderScene(route, navigator, splash) {
    const Component = Routes[route.name];
    return <Component route={route} navigator={navigator} splash={splash} />
  }
  
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'splash'}}
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