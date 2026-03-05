const {Before, After} = require("@cucumber/cucumber");
const BrowserManager = require('../../utils/BrowserManager');

Before(async function(){

    const browserSetup = await BrowserManager.launchBrowser();

    this.browser = browserSetup.browser;
    this.page = browserSetup.page;

});

After(async function(){

    await this.browser.close();
});