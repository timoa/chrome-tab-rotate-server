const boom = require('boom');
const fs = require('fs');
const path = require('path');

const logger = require('../lib/logger');
const network = require('../lib/network');
const inventory = require('../static/inventory.json');

const getPlaylistPath = (request) => {
  
  // Default
  let pathname = path.join(__dirname, '../static/playlists');
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

  logger.info(`[${ip}] ${request.method} ${request.url}  => ${filename}`);

  return pathname;
};

// Get secrets by ID
exports.getPlaylist = async (request, reply) => {
  try {
    const pathname = getPlaylistPath(request);

    fs.exists(pathname, (exist) => {
      if (!exist) {
        // if the file is not found, return 404
        reply
          .code(404)
          .send({
            error: `File ${pathname} not found!`
          });
      }
      fs.readFile(pathname, (err, data) => {
        if (err) {
          reply
            .code(500)
            .send({
              error: err
            });
        } else {
          reply
            .header('Content-type', 'application/json')
            .send(data);
        }
      });
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};
