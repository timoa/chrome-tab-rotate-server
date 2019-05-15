const request = require('request');
const { expect } = require('chai');
const config = require('../../src/config/config.json');

// Server
describe('Root endpoint response', () => {
  it('should return 404', done => {
    request.get(`http://localhost:${config.app.port}/`, (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Root API endpoint response', () => {
  it('should return 404', done => {
    request.get(`http://localhost:${config.app.port}/api`, (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
