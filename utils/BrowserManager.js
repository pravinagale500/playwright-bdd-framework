const {chromium, firefox, webkit} = require('playwright');
const config = require('../config/env');

class BrowserManager {

    static async launchBrowser(){

        let browserType;

        switch (config.browser) {

            case "firefox":
                browserType = firefox;
                break;

            case "webkit":
                    browserType = webkit;
                    break;

            default:
                browserType = chromium;
        }

        const browser = await browserType.launch({headless:false});
        const context = await browser.newContext();
        const page = await context.newPage();

        return{browser, context, page};
    }
}

module.exports =BrowserManager;