const fastify = require('fastify')();
const fastifyHelmet = require('@fastify/helmet');
const fastifyHealthcheck = require('fastify-healthcheck');

const logger = require('./lib/logger');
const config = require('./config/config.json');
const routes = require('./routes');

const host = process.env.NODE_HOST || '0.0.0.0';
const port = process.env.NODE_PORT || config.app.port;

// Register Helmet
fastify.register(fastifyHelmet, {
  global: true,
});

// Register the Health plugin
fastify.register(fastifyHealthcheck, {
  healthcheckUrl: `/${config.healthCheck.path}`
});

// Load the routes
routes.forEach(route => {
  fastify.route(route);
});

// Start the Fastify HTTP server
const start = async () => {
  try {
    await fastify.listen({ port, host })
      .then(address => {
        logger.info(`Server listening on ${address}`);
      });
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

start();
