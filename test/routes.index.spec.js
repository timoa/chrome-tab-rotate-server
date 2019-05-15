const { expect } = require('chai');
const routes = require('../src/routes');

// Routes
describe('Routes', () => {
  it('expect "routes" to be a array', done => {
    expect(routes).to.be.an('array');
    done();
  });
  it('expect the first route URL to be "/api/config"', done => {
    expect(routes[0].url).to.be.equals('/api/config');
    done();
  });
});
