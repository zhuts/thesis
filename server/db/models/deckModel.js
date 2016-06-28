var mongoose = require('mongoose');

var deckSchema = mongoose.Schema({

  // id of user creating deck
  userid: {
    type: String,
    required: true
  },
  
  // array containing user ids that user has chosen to share with
  shared: [{
    userid: String,
    swiped: Boolean
  }],
  
  // name of deck
  name: String,
  
  // deck array containing objects(cards)
  deck: [{
    name: String, // or businessID?
    imageUrl: String,
    likes: Number,
  }],
});

var Deck = mongoose.model('Deck', deckSchema);
module.exports = Deck;


