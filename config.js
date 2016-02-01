exports.config = {
  specs: [
    'features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'custom',
  frameworkPath: './node_modules/protractor-cucumber-framework',
  cucumberOpts: {
    require: ['features/mySteps.js'],
    format: 'pretty'
  }
};
