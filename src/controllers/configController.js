const boom = require('boom');

// Get secrets by ID
exports.getConfig = async req => {
  try {
    let json = {};
    if (req.body) {
      json = JSON.stringify(req.body);
    }
    return json;
  } catch (err) {
    throw boom.boomify(err);
  }
};
