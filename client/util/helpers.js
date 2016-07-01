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
        // console.log(data.businesses);
        callback(user);
      })
      .catch(function(err) {
        console.log(err);
      })
  }
  
};


