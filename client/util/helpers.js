export default {
  
  searchYelp: (term, location, callback) => {
    const url = `http://localhost:3000/yelpSearch?term=${term}&location=${location}`;
    
    fetch(url)
      .then(function(response) {
        console.log(response);                   
        return response.json() 
      })
      .then(function(data) {
        // console.log(data.businesses);
        callback(data.businesses);
      })
      .catch(function(err) {
        console.log(err);
      })
  },

  getUsers: (callback) => {
    const url = `http://localhost:3000/users`;
    fetch(url)
      .then(function(response) {             
        return response.json() ;
      })
      .then(function(user) {
        console.log(user);
        callback(user);
      })
      .catch(function(err) {
        console.log(err);
      })
  },

  getFriends: (callback) => {
    const url = `http://localhost:3000/users/friends/:user_id`;
    fetch(url)
      .then(function(response) {               
        return response.json() ;
      })
      .then(function(user) {
        // console.log(data.businesses);
        callback(user);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  
  addFriend: (callback, userid) => {
    const url = `http://localhost:3000/users/friends/${userid}`;
    fetch(url, {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(function(response) {               
        return response.json() ;
      })
      .then(function(user) {
        // console.log(data.businesses);
        callback(user);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  
  getUserCreatedDecks: (userid, callback) => {
    const url = `http://localhost:3000/decks/${userid}`;
    fetch(url)
      .then(function(response) {
        return response.json() 
      })
      .then(function(userDecks) {
        callback(userDecks);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  
  getUserSharedDecks: (userid, callback) => {
    const url = `http://localhost:3000/decks/shared/${userid}`;
    fetch(url)
      .then(function(response) {
        return response.json() 
      })
      .then(function(sharedDecks) {
        callback(sharedDecks);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  
  updateLikeCount: (deckid, cardid, callback) => {
    const url = `http://localhost:3000/decks/${deckid}`;
    const request = new Request(url, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        cardId: cardid
      })
    })
    fetch(request)
      .then(function(response) {
        return response.json() 
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(err) {
        console.log(err);
      })
  },
  
  updateSwipeStatus: (deckid, userId, callback) => {
    const url = `http://localhost:3000/decks/shared/${deckid}`;
    const request = new Request(url, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        userId: userId
      })
    })
    fetch(request)
      .then(function(response) {
        return response.json() 
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(err) {
        console.log(err);
      })
  },

  loadToS3: (uri, name){
    let file = {
      // `uri` can also be a file system path (i.e. file://)
      uri: "assets-library://asset/asset.PNG?id=655DBE66-8008-459C-9358-914E1FB532DD&ext=PNG",
      name: "image.png",
      type: "image/png"
    }

    let options = {
      keyPrefix: "uploads/",
      bucket: "your-bucket",
      region: "us-east-1",
      accessKey: "your-access-key",
      secretKey: "your-secret-key",
      successActionStatus: 201
    }

  }
};


