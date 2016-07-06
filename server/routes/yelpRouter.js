const express = require('express');
const router = express.Router();
const Yelp = require('yelp');
// const keys = require('../apiKeys');

const yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY, // keys.consumerKey,
  consumer_secret: process.env.CONSUMER_SECRET, // keys.consumerSecret,
  token: process.env.TOKEN, // keys.token,
  token_secret: process.env.TOKEN_SECRET, // keys.tokenSecret,
});
//normal yelp query route
router.get('/', (req, res) => {
  //parse term and location out of front end query string
  const term = req.query.term;
  const location = req.query.location;
  // const limit = "5";
  
  //query yelp api with two search terms
  yelp.search({ term, location })
    .then(function (data) {
      console.log(data);
      res.send(data);
    })
    .catch(function (err) {
      console.error(err);
    });
})
//yelp query route for rebuilding decks using business IDs, as per
router.get('/business', (req, res) => {

  const id = req.query.id;

  yelp.business(id)
    .then(function (data) {
      console.log(data);
      res.send(data);
    })
    .catch(function(err) {
      console.error(err);
    });
})

module.exports = router;
