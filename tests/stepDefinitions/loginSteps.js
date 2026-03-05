const {Given, When, Then} = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');
const config = require('../../config/env');


Given(/^user opens login page$/, async function(){
    this.loginPage = new LoginPage(this.page);
    await this.page.goto(config.baseURL);
});


When(/^user enters "([^"]*)" and "([^"]*)"$/, async function(username, password){
    await this.loginPage.login(username, password);
});

Then(/^user should see dashboard$/, async function(){
    await this.page.waitForSelector(".inventory_list");
})