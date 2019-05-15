const request = require('request');
const { expect } = require('chai');
const config = require('../../src/config/config.json');

// Server
describe('Health endpoint response', () => {
  it('should return 200', done => {
    request.get(`http://localhost:${config.app.port}/_health`, (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
