const { expect } = require('chai');

const lib = require('../src/controllers/contentController');

// Controllers - Config
describe('Controllers - Content', () => {
  describe('getContent()', () => {
    it('expect "getContent()" to be a function', done => {
      expect(lib.getContent).to.be.a('function');
      done();
    });
  });
});
