'use strict';

const AWS        = require('aws-sdk');
const dynamodb   = new AWS.DynamoDB.DocumentClient();

const defaultResults = process.env.defaultResults || 8;
const tableName      = process.env.pets_table || 'pets-store';

async function getRestaurants(count) {

  console.log('received request!');
    
  let req = {
    TableName: tableName,
    Limit: count
  };

  return dynamodb.scan(req).promise();
}

module.exports.handler = async (event) => {

  let resp = await getRestaurants(defaultResults);

  let response = {
    statusCode: 200,
    body: JSON.stringify(resp.Items)
  }

  return response

}
