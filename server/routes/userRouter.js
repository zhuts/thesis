var express = require('express');
var router = express.Router();
var auth0 = require('../auth0.config.js');
var request = require('request');

router.get('/', (req, res) => {
  
  var options = {
    uri: 'https://apexswipe.auth0.com/api/v2/users',
    method: 'GET',
    headers: {
      Authorization: auth0.authentication
    }
  };
  
  request(options, (err, response, body) => {
    if (err) {
      console.log(err);
      res.statusCode(500).send();
    } else {
      res.send(body);
    }
  })
  
})

module.exports = router;