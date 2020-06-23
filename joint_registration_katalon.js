const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
    const page = await browser.newPage();
    let element, formElement, tabs;


 try {
        await synthetics.takeScreenshot("goto the app login page", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

    await page.goto(`https://app.testing.cargoai.co/auth/login`, { waitUntil: 'networkidle0' });



 try {
        await synthetics.takeScreenshot("move to signup page", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }


	element = await page.$x(`//a[contains(text(),'Sign Up')]`);
	await element[0].click();
	await page.waitForNavigation();


	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].type(`teamcargoai@hotmail.com`);

	 try {
        await synthetics.takeScreenshot("add hotmail account", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }


	element = await page.$x(`//mat-checkbox[@id='mat-checkbox-1']/label/div`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click({ clickCount: 2 });

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();




	element = await page.$x(`//*[@id="email"]`);
	await element[0].type(`teamcargoai@yahoo.com`);

	try {
        await synthetics.takeScreenshot("add yahoo account", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click({ clickCount: 2 });

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	

	element = await page.$x(`//*[@id="email"]`);
	await element[0].type(`teamcargoai@gmail.com`);

	try {
        await synthetics.takeScreenshot("add gmail account", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }


	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click({ clickCount: 2 });

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();



	element = await page.$x(`//*[@id="email"]`);
	await element[0].type(`teamcargoai@outlook.com`);

	try {
        await synthetics.takeScreenshot("add outlook account", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//mat-checkbox[@id='mat-checkbox-1']/label/div`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click({ clickCount: 2 });

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].type(`anm@anm.com`);

	try {
        await synthetics.takeScreenshot("add a company account", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//div[@id='kt_login']/div/div/kt-register/div/div/form/div[3]/div/button`);
	await element[0].click();

	element = await page.$x(`//mat-checkbox[@id='mat-checkbox-1']/label/div`);
	await element[0].click();

	try {
        await synthetics.takeScreenshot("entre terms and conditions", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//div[@id='kt_login']/div/div/kt-register/div/div/form/div[3]/div/button/strong`);
	await element[0].click();

	element = await page.$x(`//*[@id="kt_login_signup_cancel"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="email"]`);
	await element[0].type(`teamcargoai+schenker_sin@gmail.com`);

	element = await page.$x(`//*[@id="password"]`);
	await element[0].type(`Password12@!`);
    await browser.close();
})();
