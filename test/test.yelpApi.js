var assert = require('assert');
var expect = require('chai').expect;
var Yelp = require('yelp');

xdescribe('Yelp API', function () {
  
  before(function(done) {
    // query yelp api for 1 restaurant entry  
    done();
  })
  
  it('should have a name', function () {
    
    assert(typeof name).to.be.a('string');
    
  });
    
  it('should have a address location', function () {
    
    
    assert(typeof location).to.be.a('string');
  });
  
  it('should have latitude and longitude coordinates', function () {
    
    
    assert(typeof latitude).to.be.a('string');
    assert(typeof longitude).to.be.a('string');
    
  });
  
  it('should have a mobile url', function () {
    
    assert(typeof mobile_url).to.be.a('string');
    
  });
  
  it('should have a rating', function () {
    
    assert(typeof rating).to.be.a('string');
    assert(typeof rating_img_url_small).to.be.a('string');
    
  });
  
  it('should have a review count', function () {
    
    assert(typeof review_count).to.be.a('string');
    
  });
  
  it('should have a snippet text', function () {
    
    assert(typeof snippet_text).to.be.a('string');
    
  });

});


