const { expect } = require('chai');
const lib = require('../src/lib/logger');

// Lib > Logger
describe('Logger library', () => {
  describe('info()', () => {
    it('expect the "info()" to exists and be a function', done => {
      expect(typeof lib.info).to.be.equals('function');
      done();
    });
    it('expect the "info()" function to not throw without an argument', done => {
      expect(lib.info).to.not.throw();
      done();
    });
  });

  describe('warn', () => {
    it('expect the "warn()" to exists and be a function', done => {
      expect(typeof lib.warn).to.be.equals('function');
      done();
    });
    it('expect the "warn()" function to not throw without an argument', done => {
      expect(lib.warn).to.not.throw();
      done();
    });
  });

  describe('error', () => {
    it('expect the "error()" to exists and be a function', done => {
      expect(typeof lib.error).to.be.equals('function');
      done();
    });
    it('expect the "error()" function to not throw without an argument', done => {
      expect(lib.error).to.not.throw();
      done();
    });
  });

  describe('log', () => {
    it('expect the "log()" to exists and be a function', done => {
      expect(typeof lib.log).to.be.equals('function');
      done();
    });
    it('expect the "log()" function to throw without an argument', done => {
      expect(lib.log).to.throw();
      done();
    });
  });
});
