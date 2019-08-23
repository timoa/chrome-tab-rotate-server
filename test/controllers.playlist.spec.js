const { expect } = require('chai');

const lib = require('../src/controllers/playlistController');

// Controllers - Config
describe('Controllers - Playlist', () => {
  describe('getPlayList()', () => {
    it('expect "getPlaylist()" to be a function', done => {
      expect(lib.getPlaylist).to.be.a('function');
      done();
    });
  });
});
