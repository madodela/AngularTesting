exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['spec/end2end/*'],
  capabilities: {
    browserName: 'firefox'
  },
  baseUrl: 'http:localhost:8787/'
};
