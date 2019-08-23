const playlistController = require('../controllers/playlistController');
const fileController = require('../controllers/fileController');

const routes = [
  {
    method: 'GET',
    url: '/',
    handler: playlistController.getPlaylist
  },
  {
    method: 'GET',
    url: '/file/:path',
    handler: fileController.getFile
  }
];

module.exports = routes;
