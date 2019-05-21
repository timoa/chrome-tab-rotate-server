const { expect } = require('chai');
const playlistController = require('../src/controllers/playlistController');

// Controllers - Config
describe('Controllers - Playlist', () => {
  it('expect "getPlaylist" to be a function', done => {
    expect(playlistController.getPlaylist).to.be.a('function');
    done();
  });
});
