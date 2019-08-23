const { expect } = require('chai');

const lib = require('../src/controllers/fileController');

// Controllers - Config
describe('Controllers - File', () => {
  describe('getFile()', () => {
    it('expect "getFile()" to be a function', done => {
      expect(lib.getFile).to.be.a('function');
      done();
    });
  });
});
