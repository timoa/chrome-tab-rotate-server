const configController = require('../controllers/configController');

const routes = [
  {
    method: 'GET',
    url: '/api/config',
    handler: configController.getConfig
  }
];

module.exports = routes;
