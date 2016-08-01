var webdriver = require('selenium-webdriver'),

HomePage = function () {
  this.pageHeading = element(webdriver.By.id('welcome-message'));
  this.get = function(){
    browser.get('index.html');
  };
};
