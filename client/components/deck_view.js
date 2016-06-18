import React, {
  StyleSheet,
  PropTypes,
  View,
  Text,
} from 'react-native';

export default class DeckView extends React.Component{
  render() {
    return (
      <div className="fullscreen">
        <searchResults />
        <swipeCard />
        <leftSwipeBtn />
        <rightSwipeBtn />
      </div>
    )
  }
};

class SearchResults extends React.Component({
  render() {
    return (
      <h2></h2>
    )
  }
});

class SwipeCard extends React.Component({
  render() {
    return (
      <div>
        <cardTitle />
        <cardPic />
      </div>
    )
  }
});

class CardTitle extends React.Component({
  render() {
    return (
      <h2></h2>
    )
  }
});

class CardPic extends React.Component({
  render() {
    return (
      <div className="card-img"></div>
    )
  }
});

class LeftSwipeBtn extends React.Component({
  render() {
    return (
      <button></button>
    )
  }
});

class RightSwipeBtn extends React.Component({
  render() {
    return (
      <button></button>
    )
  }
});
