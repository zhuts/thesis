export default {
  
  searchYelp: (term, location, callback) => {
    const url = `http://localhost:3000/yelpSearch?term=${term}&location=${location}`;
    
    fetch(url)
      .then(function(response) {
        // console.log(response);                   
        return response.json() 
      })
      .then(function(data) {
        // console.log(data.businesses);
        callback(data.businesses);
      })
      .catch(function(err) {
        console.log(err);
      })
  }
  
};


