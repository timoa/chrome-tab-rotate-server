const playlistController = require('../controllers/playlistController');
const contentController = require('../controllers/contentController');

const routes = [
  {
    method: 'GET',
    url: '/',
    handler: playlistController.getPlaylist
  },
  {
    method: 'GET',
    url: '/content/:path',
    handler: contentController.getContent
  }
];

module.exports = routes;
