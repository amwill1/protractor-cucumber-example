var mySteps = function () {

  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  var expect = chai.expect;

  this.Given(/^I go on "([^"]*)"$/, function (arg1, callback) {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(2000).then(function () {
      callback();
    });
  });

  this.Then(/^the title should equal "([^"]*)"$/, function (arg1, callback) {
    browser.getTitle().then(function (title) {
      expect(title).to.equal(arg1);
      callback();
    });
  });
};

module.exports = mySteps;
