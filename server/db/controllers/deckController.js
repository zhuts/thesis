var mongoose = require('mongoose');
var db = require('../config');
var Deck = require('../models/deckModel');

module.exports = {
  
  getDecks: function(req, res) {
    var userid = req.params.userid;
    console.log('get requested for', userid);
    
    Deck.find({userid: userid})
      .exec(function(err, decks) {
        if(err) {
          console.log(err);
          res.sendStatus(400);
        } else {
          res.status(200).send(decks);
        }
      })
  },
  
  getSharedDecks: function(req, res) {
    var userid = req.params.userid;
    
    Deck.where('shared.userid').equals(userid)
      .exec(function(err, decks) {
        if(err) {
          console.log(err);
          res.sendStatus(400);
        } else {
          res.status(200).send(decks);
        }
      })
  },
  
  addDeck: function(req, res) {
    var deck = req.body;
        
    new Deck(deck).save(function(err, deck) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(201).send('New Deck Added');
      }
    });
  },
  
  updateOneDeck: function(req, res) {
    
    var deckId = req.params.id;
    var cardId = req.body.cardId;
    
    // console.log('deckid', deckId, 'cardid', cardId);
    Deck.findById(deckId, function(err, deck) {
      if(err) {
        console.log(err);
        return;
      }
      // console.log(deck);
      var card = deck.deck.id(cardId);
      var likes = card.likes;
      card.likes = likes + 1;
      deck.save(function(err) {
        if(err) {
          console.log(err);
        }
        res.sendStatus(200);
      });
      
    })
  },
  
  deleteOneDeck: function(req, res) {
    var deckId = req.params.id;
    var userId = req.body.userid
    
    Deck.findOneAndRemove({_id: deckId, userid: userId}, function(err) {
      if(err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    })
  }
}





















