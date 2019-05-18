const playlistController = require('../controllers/playlistController');

const routes = [
  {
    method: 'GET',
    url: '/',
    handler: playlistController.getPlaylist
  }
];

module.exports = routes;
