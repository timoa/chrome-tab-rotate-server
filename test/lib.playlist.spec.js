const { expect } = require('chai');
const lib = require('../src/lib/playlist');

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
});
