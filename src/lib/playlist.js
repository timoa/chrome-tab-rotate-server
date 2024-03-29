const path = require('path');

const logger = require('./logger');
const network = require('./network');
const inventory = require('../../config/inventory.json');

/**
 *
 * @param {Object} request  Fastify request object
 * @returns {String}        Path name
 */
const getPlaylistPath = (request) => {

  // Default
  let pathname = path.join(__dirname, '../../config/playlists');
  let filename = 'default.json';

  // Detect the IP of the screen
  const ip = network.getIp(request);

  // Specific screen
  inventory.screens.forEach((item) => {
    if (item.ip === ip) {
      filename = `${item.name}.json`;
    }
  });

  pathname = path.join(pathname, filename);

  logger.info(`[${ip}] Playlist => ${filename}`);

  return pathname;
};

module.exports = { getPlaylistPath };
