let deckView = React.createClass({
  render: function() {
    return (
      <div className="fullscreen">
        <searchResults />
        <swipeCard />
        <leftSwipeBtn />
        <rightSwipeBtn />
      </div>
    )
  }
});

let searchResults = React.createClass({
  render: function() {
    return (
      <h2></h2>
    )
  }
});

let swipeCard = React.createClass({
  render: function() {
    return (
      <div>
        <cardTitle />
        <cardPic />
      </div>
    )
  }
});

let cardTitle = React.createClass({
  render: function() {
    return (
      <h2></h2>
    )
  }
});

let cardPic = React.createClass({
  render: function() {
    return (
      <div className="card-img"></div>
    )
  }
});

let leftSwipeBtn = React.createClass({
  render: function() {
    return (
      <button></button>
    )
  }
});

let rightSwipeBtn = React.createClass({
  render: function() {
    return (
      <button></button>
    )
  }
});