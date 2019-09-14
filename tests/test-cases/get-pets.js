'use strict';

const expect = require('chai').expect;   
const when = require('../steps/when');

describe(`When we invoke the GET /pets `, async function() {

  it(`Should return pets list`, async function() {
    let res = await when.we_invoke_get_pets();

    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.lengthOf(8);

    for (let pet of res.body) {
      expect(pet).to.have.property('name');
      expect(pet).to.have.property('image');
    }

  });
});