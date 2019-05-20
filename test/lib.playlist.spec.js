const { expect } = require('chai');

const lib = require('../src/lib/playlist');
const testData = require('./testData.json');

// Lib > Playlist
describe('Playlist library', () => {
  it('expect "getPlaylistPath" to exists and be a function', done => {
    expect(typeof lib.getPlaylistPath).to.be.equals('function');
    done();
  });
  it('expect the "getPlaylistPath" function to throw without an argument', done => {
    expect(lib.getPlaylistPath).to.throw();
    done();
  });
  it('expect the "getPlaylistPath" function to throw without an argument', done => {
    const screen01Path = `${(__dirname).replace(/test/, '')}src/static/playlists/screen01.json`;
    expect(lib.getPlaylistPath(testData.network[0].request)).to.be.equals(screen01Path);
    done();
  });
});
