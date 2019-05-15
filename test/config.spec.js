const { expect } = require('chai');
const config = require('../src/config/config.json');

// Configuration
describe('Config file', () => {
  it('expect "app.port" to be a number', done => {
    expect(config.app.port).to.be.an('number');
    done();
  });
  it('expect "healthCheck.path" to be a string', done => {
    expect(config.healthCheck.path).to.be.a('string');
    done();
  });
});
