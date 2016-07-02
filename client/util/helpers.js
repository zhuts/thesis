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
  }
};


