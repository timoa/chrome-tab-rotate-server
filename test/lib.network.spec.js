const { expect } = require('chai');
const network = require('../src/lib/network');
const testData = require('./testData.json');

// Network
describe('Network library', () => {
  it('expect "getIp" to exists and be a function', done => {
    expect(typeof network.getIp).to.be.equals('function');
    done();
  });
  it('expect the "getIp" function to not throw without an argument', done => {
    expect(network.getIp).to.not.throw();
    done();
  });
  it('expect "getIp" to return "127.0.0.1"', done => {
    expect(network.getIp()).to.be.equals('127.0.0.1');
    done();
  });
  it('expect "getIp" to return "10.0.0.10" without HTTP proxy', done => {
    expect(network.getIp(testData.network[0].request)).to.be.equals('10.0.0.10');
    done();
  });
  it('expect "getIp" to return "10.0.0.10" with HTTP proxy', done => {
    expect(network.getIp(testData.network[1].request)).to.be.equals('10.0.0.10');
    done();
  });
});
