const boom = require('boom');
const path = require('path');
const fs = require('fs');

const file = require('../lib/file');

/**
 * 
 * @param {Object} request  Fastify request object
 * @param {Function} reply  Fastify reply callback  
*/
exports.getContent = async (request, reply) => {
  try {
    const pathname = file.getContentPath(request);
    const { ext } = path.parse(pathname);
    const mimeType = file.getMimeType(ext);

    fs.exists(pathname, (exist) => {
      if (!exist) {
        // if the file is not found, return 404
        reply.code(404).send({
          error: `File ${pathname} not found!`,
        });
      }
      fs.readFile(pathname, (err, data) => {
        if (err) {
          reply.code(500).send({
            error: err,
          });
        } else if (!mimeType) {
          // if the file is not supported, return 415
          reply.code(415).send({
            error: `File ${pathname} is not supported!`,
          });
        } else {
          reply.header('Content-type', mimeType).send(data);
        }
      });
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};
