const { expect } = require('chai');

const lib = require('../src/controllers/playlistController');
const testData = require('./testData.json');

// Controllers - Config
describe('Controllers - Playlist', () => {
  describe('getPlayList()', () => {
    it('expect "getPlaylist()" to be a function', done => {
      expect(lib.getPlaylist).to.be.a('function');
      done();
    });
    // it('expect "getPlaylist()" to not throw', async () => {
    //   const result = await lib.getPlaylist(testData.network[0].request);
    //   expect(result).to.not.throw();
    // });
  });
});
