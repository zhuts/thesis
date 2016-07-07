var mongoose = require('mongoose');
var db = require('../config');
var Deck = require('../models/deckModel');
mongoose.Promise = require('bluebird');

module.exports = {
  
  getAll: function(user_id, callback) {
    Deck.find({user_id: user_id}, callback)
  },
  
  getShared: function(user_id, callback) {
    Deck.where('shared.user_id').equals(user_id)
      .exec(callback)
  },
  
  addDeck: function(deck, callback) {
    new Deck(deck).save(callback);
  },
  
  updateOneCard: function(deckId, cardId, callback) {
    Deck.findById(deckId, function(err, deck) {
      if(err) {
        callback(err);
        return;
      }
      var card = deck.deck.id(cardId);
      var likes = card.likes;
      card.likes = likes + 1;
      deck.save(callback);
    })
  },
  
  updateDeckSwiped: function(deckId, userId, callback) {
    Deck.findById(deckId, function(err, deck) {
      if(err) {
        callback(err);
        return;
      }
      var swiped = deck.shared.id(userId);
      swiped.swiped = true;
      deck.save(callback);
    })
  },
  
  deleteOneDeck: function(deckId, user_id, callback) {
    Deck.findOneAndRemove({_id: deckId, user_id: user_id}, callback)
  }
}
