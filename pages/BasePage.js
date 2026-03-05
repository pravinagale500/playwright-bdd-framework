class BasePage{

    constructor(page){

        this.page = page;
    }

    async click(locator){
        await this.page.click(locator);
    }

    async type(locator, value){
        await this.page.fill(locator, value);
    }
}

module.exports = BasePage;