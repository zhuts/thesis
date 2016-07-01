var express = require('express');
var router = express.Router();
var request = require('request');
var handlers = require('../util/handlers');
//AWS requires
var AWS = require('aws-sdk');
var S3_BUCKET = process.env.s3_BUCKET;

router.get('/', function(req,res){
  console.log('s3 route activated');
  var s3 = new AWS.S3();
  var fileName = req.query('file-name');
  var filetype = req.query('file-type');
  var s3Param = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: filetype,
    // ACL: 'public-read'
  }

  s3.getSignedURL('putObject', s3Params, (err, data) => {
    if (err){
      console.log(err);
      return res.end();
    }
    var returnData = {
      signedRequest: data,
      url: 'https://${S3_BUCKET}.s3.amazonaws.com/$(fileName)'
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});

module.exports = router;