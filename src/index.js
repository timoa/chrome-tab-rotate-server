const fastify = require('fastify')();
const logger = require('./lib/logger');
const config = require('./config/config.json');
const routes = require('./routes');

const host = process.env.NODE_HOST || 'localhost';
const port = process.env.NODE_PORT || config.app.port;

// Register the Health plugin
fastify.register(require('fastify-healthcheck'), {
  healthcheckUrl: `/${config.healthCheck.path}`
});

// Load the routes
routes.forEach(route => {
  fastify.route(route);
});

// Start the Fastify HTTP server
const start = async () => {
  try {
    await fastify.listen(port, host).then(address => {
      logger.info(`Server listening on ${address}`);
    });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

start();
