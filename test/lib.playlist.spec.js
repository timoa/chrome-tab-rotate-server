const { expect } = require('chai');

const lib = require('../src/lib/playlist');
const testData = require('./testData.json');

// Lib > Playlist
describe('Playlist library', () => {
  describe('getPlaylistPath()', () => {
    it('expect "getPlaylistPath()" to exists and be a function', done => {
      expect(typeof lib.getPlaylistPath).to.be.equals('function');
      done();
    });
    it('expect the "getPlaylistPath()" function to not throw without an argument', done => {
      expect(lib.getPlaylistPath).to.not.throw();
      done();
    });
    it('expect the "getPlaylistPath()" to output the "localhost.json" file path', done => {
      const configPath = `${(__dirname).replace(/test/, '')}static/playlists/localhost.json`;
      expect(lib.getPlaylistPath(testData.network[0].request)).to.be.equals(configPath);
      done();
    });
    it('expect the "getPlaylistPath()" to output the "localhost.json" file path behind a proxy server', done => {
      const configPath = `${(__dirname).replace(/test/, '')}static/playlists/localhost.json`;
      expect(lib.getPlaylistPath(testData.network[1].request)).to.be.equals(configPath);
      done();
    });
  });
});
