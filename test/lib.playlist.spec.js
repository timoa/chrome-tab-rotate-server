const { expect } = require('chai');

const lib = require('../src/lib/playlist');
const testData = require('./testData.json');

// Lib > Playlist
describe('Playlist library', () => {
  it('expect "getPlaylistPath" to exists and be a function', done => {
    expect(typeof lib.getPlaylistPath).to.be.equals('function');
    done();
  });
  it('expect the "getPlaylistPath" function to not throw without an argument', done => {
    expect(lib.getPlaylistPath).to.not.throw();
    done();
  });
  it('expect the "getPlaylistPath" to output the "screen01.json" file path', done => {
    const screen01Path = `${(__dirname).replace(/test/, '')}src/static/playlists/screen01.json`;
    expect(lib.getPlaylistPath(testData.network[0].request)).to.be.equals(screen01Path);
    done();
  });
  it('expect the "getPlaylistPath" to output the "screen02.json" file path', done => {
    const screen02Path = `${(__dirname).replace(/test/, '')}src/static/playlists/screen02.json`;
    expect(lib.getPlaylistPath(testData.network[1].request)).to.be.equals(screen02Path);
    done();
  });
});
