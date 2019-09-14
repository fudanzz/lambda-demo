'use strict';

const APP_ROOT   = '../../';
const http = require('superagent');
const URL        = require('url');
const _          = require('lodash');

let respondFrom = function (httpRes) {
  let contentType = _.get(httpRes, 'headers.content-type', 'application/json');
  let body = 
    contentType === 'application/json'
      ? httpRes.body
      : httpRes.text;

  return { 
    statusCode: httpRes.status,
    body: body,
    headers: httpRes.headers
  };
}


let viaHttp = async function(relPath, method, opts) {
  
  let root = process.env.TEST_ROOT;
  let url = `${root}/${relPath}`;
  console.log(`invoking via HTTP ${method} ${url}`);

  try {
    let httpReq = http(method, url);
    let res = await httpReq;
    //console.log(res);
    return respondFrom(res);
  } catch (err) {
    console.error(err);
  }
};

let we_invoke_get_pets = async function() {
  let res = await viaHttp('pets', 'GET');
  return res;
};

module.exports = {
  we_invoke_get_pets
};