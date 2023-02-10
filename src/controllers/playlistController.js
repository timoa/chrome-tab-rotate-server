const boom = require('@hapi/boom');
const fs = require('fs');

const playlist = require('../lib/playlist');

/**
 *
 * @param {Object} request  Fastify request object
 * @param {Function} reply  Fastify reply callback
*/
exports.getPlaylist = async (request, reply) => {
  try {
    const pathname = playlist.getPlaylistPath(request);

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
