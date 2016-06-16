let deckView = React.createClass({
  render: function() {
    <div className="fullscreen">
      <searchResults />
      <swipeCard />
      <leftSwipeBtn />
      <rightSwipeBtn />
    </div>
  }
});

let searchResults = React.createClass({
  render: function() {
    <h2></h2>
  }
});

let swipeCard = React.createClass({
  render: function() {
    <div>
      <cardTitle />
      <cardPic />
    </div>
  }
});

let cardTitle = React.createClass({
  render: function() {
    <h2></h2>
  }
});

let cardPic = React.createClass({
  render: function() {
    <div className="card-img"></div>
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