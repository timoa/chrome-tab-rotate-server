const request = require('request');
const { expect } = require('chai');
const config = require('../../src/config/config.json');

// Server
describe('Config endpoint response', () => {
  it('should return 200', done => {
    request.get(`http://0.0.0.0:${config.app.port}/`, (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
