const { expect } = require('chai');

const lib = require('../src/lib/file');
const testData = require('./testData.json');

// Lib > Playlist
describe('File library', () => {
  describe('getFilePath()', () => {
    it('expect "getFilePath()" to exists and be a function', done => {
      expect(typeof lib.getFilePath).to.be.equals('function');
      done();
    });
    it('expect the "getFilePath()" function to throw without an argument', done => {
      expect(lib.getFilePath).to.throw();
      done();
    });
    it('expect the "getFilePath()" to output the "example.png" file path', done => {
      const filePath = `${(__dirname).replace(/test/, '')}public/example.png`;
      expect(lib.getFilePath(testData.file[0].request)).to.be.equals(filePath);
      done();
    });
  });
});
