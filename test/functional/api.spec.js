const request = require('request');
const { expect } = require('chai');
const config = require('../../src/config/config.json');

// API
describe('Root API endpoint response', () => {
  it('should return 404', done => {
    request.get(`http://0.0.0.0:${config.app.port}/api`, (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
