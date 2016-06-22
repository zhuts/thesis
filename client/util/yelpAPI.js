import Yelp from 'yelp';
import keys from '../../api.keys';

const yelp = new Yelp({
  consumer_key: keys.consumerKey,
  consumer_secret: keys.consumerSecret,
  token: keys.token,
  token_secret: keys.tokenSecret,
});

export default (term, location) => {
  yelp.search({ term: term, location: location })
  .then((data) => {
    console.log(data);
    //here we need to send info to state using reducer
  })
  .catch((err) => {
    console.error(err);
    //here we need to send info to state using reducer
  });
}


