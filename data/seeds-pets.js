'use strict';


const AWS = require('aws-sdk');
AWS.config.region = 'cn-northwest-1';
const dynamodb = new AWS.DynamoDB.DocumentClient();

let pets = [
  { 
    name: "spaniel-japanese", 
    image: "https://images.dog.ceo//breeds//spaniel-japanese//n02085782_1143.jpg"
  },
  { 
    name: "chow", 
    image: "https://images.dog.ceo/breeds/chow/n02112137_15929.jpg"
  },
  { 
    name: "pug", 
    image: "https://images.dog.ceo/breeds/pug/n02110958_3938.jpg"
  },
  { 
    name: "mastiff-bull", 
    image: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1425.jpg"
  },
  { 
    name: "terrier-american", 
    image: "https://images.dog.ceo/breeds/terrier-american/n02093428_712.jpg"
  },
  { 
    name: "terrier-sealyham", 
    image: "https://images.dog.ceo/breeds/terrier-sealyham/n02095889_4306.jpg"
  },
  { 
    name: "doberman", 
    image: "https://images.dog.ceo//breeds/doberman/n02107142_814.jpg"
  },
  { 
    name: "keeshond", 
    image: "https://images.dog.ceo/breeds/keeshond/n02112350_4122.jpg"
  },
];

let putReqs = pets.map(x => ({
  PutRequest: {
    Item: x
  }
}));

let req = {
  RequestItems: {
    'pets-store': putReqs
  }
};
dynamodb.batchWrite(req).promise().then(() => console.log("all done"));