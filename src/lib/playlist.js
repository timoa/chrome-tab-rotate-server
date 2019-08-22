const path = require('path');

const logger = require('../lib/logger');
const network = require('../lib/network');
const inventory = require('../../static/inventory.json');

const getPlaylistPath = (request) => {
  
  // Default
  let pathname = path.join(__dirname, '../../static/playlists');
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
