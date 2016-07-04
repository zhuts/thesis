import { RNS3 } from 'react-native-aws3';
import keys from '../../../api.keys';

export default (uri, name) => {
  let file = {
    // `uri` can also be a file system path (i.e. file://)
    uri: uri
    name: name,
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
  
  RNS3.put(file, options).then(response => {
    if (response.status !== 201)
      throw new Error("Failed to upload image to S3");
      console.log(response.body);    
  })
}