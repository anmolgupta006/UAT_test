const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1920,
            height: 1080
        },
        args: ['--start-maximized']
    });
    const page = await browser.newPage();
    let element, formElement, tabs;


    // Login part needs to be added here like login, otp and then this is the search page.
    // Replicate the process of retrieving the OTP from AWS SQS and then fill it automatically from the OTP.
    // Refer to document : https://docs.google.com/spreadsheets/d/1RbuKcwAHrZm0PPlWmpAd17_3UYO1rnQNw_TOQ58ch5w/edit?ts=5ed5a74e#gid=434813350.

    await page.goto(`https://app.testing.cargoai.co/forwarder/search/forwarder-search`, {
        waitUntil: 'networkidle0'
    });



    try {
        await synthetics.takeScreenshot("check forwarder-search page", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

    //check input detail page
    element = await page.$x(`//*[@id="input-detail-btn"]`);
    await element[0].click();

    // add a piece group
    element = await page.$x(`//*[@id="add-piece-btn"]`);
    await element[0].click();


    try {
        await synthetics.takeScreenshot("add a piece group", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

    // add length, width, height, weight, and save
    element = await page.$x(`//*[@id="length"]`);
    await element[0].click();

    element = await page.$x(`//*[@id="length"]`);
    await element[0].type(`1`);

    element = await page.$x(`//*[@id="width"]`);
    await element[0].click();

    element = await page.$x(`//*[@id="width"]`);
    await element[0].type(`1`);

    element = await page.$x(`//*[@id="height"]`);
    await element[0].click();

    element = await page.$x(`//*[@id="height"]`);
    await element[0].type(`1`);

    element = await page.$x(`//*[@id="weight"]`);
    await element[0].click();

    element = await page.$x(`//*[@id="weight"]`);
    await element[0].type(`1`);

    element = await page.$x(`//button[@id='save-btn']/span`);
    await element[0].click();

    element = await page.$x(`//button[@id='edit-btn']/span/mat-icon`);
    await element[0].click();

    element = await page.$x(`//button[@id='save-btn']/span`);
    await element[0].click();

    try {
        await synthetics.takeScreenshot("add a piece", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

    // click delete button
    element = await page.$x(`//button[@id='delete-btn']/span/mat-icon`);
    await element[0].click();


    try {
        await synthetics.takeScreenshot("show delete pop up", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }



    //confirmation for delete button
    element = await page.$x(`//mat-dialog-container[@id='mat-dialog-2']/kt-delete-entity-dialog/div/div[2]/div[2]/div/button[2]`);
    await element[0].click();

    element = await page.$x(`//*[@id="mat-input-1"]`);
    await element[0].click();

    element = await page.$x(`//*[@id="mat-input-1"]`);
    await element[0].click();

    element = await page.$x(`//*[@id="mat-input-1"]`);
    await element[0].click({
        clickCount: 2
    });


    try {
        await synthetics.takeScreenshot("Finish the delete popup/ add serach fields", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }



    //Enter 'SIN' as origin, 'HKG' as destination, 'Human Remains/Organs' as goods type, '2' as piece(s), <random integer> as volume and '666' as weight. Tick the 'Save as template' checkbox, then click 'Search' button.
    element = await page.$x(`//*[@id="mat-input-1"]`);
    await element[0].type(`sin`);

    element = await page.$x(`//mat-option[@id='mat-option-11']/span/div`);
    await element[0].click();

    element = await page.$x(`//*[@id="mat-input-2"]`);
    await element[0].click();

    element = await page.$x(`//*[@id="mat-input-2"]`);
    await element[0].type(`HKG - Hong Kong International`);

    element = await page.$x(`//*[@id="mat-input-5"]`);
    await element[0].click();

    element = await page.$x(`//*[@id="mat-input-5"]`);
    await element[0].type(`2`);

    element = await page.$x(`//*[@id="mat-input-6"]`);
    await element[0].click();

    element = await page.$x(`//*[@id="mat-input-6"]`);
    await element[0].type(`1`);

    element = await page.$x(`//*[@id="mat-input-7"]`);
    await element[0].click();

    element = await page.$x(`//*[@id="mat-input-7"]`);
    await element[0].type(`666`);

    element = await page.$x(`//mat-checkbox[@id='mat-checkbox-2']/label/div`);
    await element[0].click();


    try {
        await synthetics.takeScreenshot("add serach detail", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }
    element = await page.$x(`//*[@id="search-btn"]`);
    await element[0].click();

    // element = await page.$x(`//mat-expansion-panel-header[@id='mat-expansion-panel-header-0']/span/mat-panel-title/label/i`);
    // await element[0].click();

    // element = await page.$x(`//button[@id='suggestion-btn']/div[2]`);
    // await element[0].click();

    // element = await page.$x(`//*[@id="search-btn"]`);

    try {
        await synthetics.takeScreenshot("the bid page", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }


    await element[0].click();
    await browser.close();
})();