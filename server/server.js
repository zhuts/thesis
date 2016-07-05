var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var morgan = require('morgan');
var multer = require('multer');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');

var node_env = process.env.NODE_ENV;
if(node_env === undefined) {
  require('dotenv').config();
}

var yelpRouter = require('./routes/yelpRouter');
var deckRouter = require('./routes/deckRouter');
var userRouter = require('./routes/userRouter');
var s3Router = require('./routes/s3Router');
// var jwtCheck = jwt({
//   secret: new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64'), // new Buffer(auth0.clientSecret),
//   audience: process.env.AUTH0_CLIENT_ID// auth0.clientID
// })
var jwtCheck = jwt({
  secret: new Buffer('1xEqRPNQDnR3EACyvfRtjTpFulhmZnQ47XvyeNBpU3GpQo7RUE5aGk97m1TsCmX4', 'base64'),
  audience: 'zpT4RjC4avB8RuI3wEd13nNYsnPDrBrS'
});
console.log(process.env.AUTH0_CLIENT_SECRET, process.env.AUTH0_CLIENT_ID);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(jwtCheck);
app.use('/yelpSearch', yelpRouter);
app.use('/decks', deckRouter);
app.use('/users', userRouter);
app.use('/sign_s3', s3Router);

module.exports = http;
