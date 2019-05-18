const { expect } = require('chai');
const lib = require('../src/lib/network');
const testData = require('./testData.json');

// Lib > Network
describe('Network library', () => {
  it('expect "getIp" to exists and be a function', done => {
    expect(typeof lib.getIp).to.be.equals('function');
    done();
  });
  it('expect the "getIp" function to not throw without an argument', done => {
    expect(lib.getIp).to.not.throw();
    done();
  });
  it('expect "getIp" to return "127.0.0.1"', done => {
    expect(lib.getIp()).to.be.equals('127.0.0.1');
    done();
  });
  it('expect "getIp" to return "10.0.0.10" without HTTP proxy', done => {
    expect(lib.getIp(testData.network[0].request)).to.be.equals('10.0.0.10');
    done();
  });
  it('expect "getIp" to return "10.0.0.10" with HTTP proxy', done => {
    expect(lib.getIp(testData.network[1].request)).to.be.equals('10.0.0.10');
    done();
  });
});
