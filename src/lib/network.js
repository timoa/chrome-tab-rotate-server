
/**
 * Return the IP of the screen
 * Support detection with or without proxy
 * 
 * @param {Object} request  Fastify request object
 * @returns {String}        IP
 */
const getIp = (request) => {
  let ip = '127.0.0.1';

  if(request && request.headers && request.ip) {
    ip = request.headers['x-forwarded-for'] || request.ip;
  }

  return ip;
}

module.exports = { getIp };
