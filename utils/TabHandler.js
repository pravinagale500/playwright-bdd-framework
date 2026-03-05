class TabHandler{

    static async switchToNewTab(context){
        const newPage = await context.waitForEvent('page');
        await newPage.waitForLoadState();

        return newPage;
    }
}

module.exports = TabHandler;