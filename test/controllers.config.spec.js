const { expect } = require('chai');
const configController = require('../src/controllers/configController');



// Controllers - Config
describe('Controllers - Config', () => {
  it('expect "getConfig" to be a function', done => {
    expect(configController.getConfig).to.be.a('function');
    done();
  });

});
