var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const Yelp = require('yelp');
const keys = require('./apiKeys');

app.get('/yelpSearch', (req, res) => {
  const yelp = new Yelp({
    consumer_key: keys.consumerKey,
    consumer_secret: keys.consumerSecret,
    token: keys.token,
    token_secret: keys.tokenSecret,
  });
  
  const term = req.query.term;
  const location = req.query.location;
  
  yelp.search({ term, location })
    .then(function (data) {
      console.log(data);
      res.send(data);
    })
    .catch(function (err) {
      console.error(err);
    });
})



const port = process.env.PORT || 3000
http.listen(port, () => {
  console.log('listening on', port);
});



// module.exports = app;


