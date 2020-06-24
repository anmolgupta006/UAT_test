const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
    const page = await browser.newPage();
    let element, formElement, tabs;

	// Refer to document : https://docs.google.com/spreadsheets/d/1RbuKcwAHrZm0PPlWmpAd17_3UYO1rnQNw_TOQ58ch5w/edit?ts=5ed5a74e#gid=434813350.

    
    await page.goto(`https://app.testing.cargoai.co/auth/register-forwarder/anmol006@e.ntu.edu.sg?token=8a95ab84-4a24-4317-a52b-0b3bb2029903`, { waitUntil: 'networkidle0' });


    try {
        await synthetics.takeScreenshot("Enter Forwarder registration page", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }


	element = await page.$x(`//*[@id="accountName"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="accountName"]`);
	await element[0].type(`singapore airlines`);

	element = await page.$x(`//form[@id='kt_form']/div/div[2]/kt-register-user-details/div/div`);
	await element[0].click();

	element = await page.$x(`//*[@id="accountName"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="accountName"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="accountName"]`);
	await element[0].click({ clickCount: 2 });

	element = await page.$x(`//*[@id="accountName"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="accountName"]`);
	await element[0].type(`dhl -2`);

	element = await page.$x(`//form[@id='kt_form']/div/div`);
	await element[0].click();

	element = await page.$x(`//*[@id="password"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="password"]`);
	await element[0].type(`123`);

	element = await page.$x(`//*[@id="confirmPassword"]`);
	await element[0].type(`abc`);


	try {
        await synthetics.takeScreenshot("enter wrong password", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//form[@id='kt_form']/div/div[2]/kt-register-user-details/div/div`);
	await element[0].click();

	element = await page.$x(`//form[@id='kt_form']/div/div[2]/kt-register-user-details/div/div[3]/div/mat-form-field/div/div/div[3]`);
	await element[0].click();

	element = await page.$x(`//*[@id="password"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="password"]`);
	await element[0].type(`Password2020!`);

	element = await page.$x(`//*[@id="confirmPassword"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="confirmPassword"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="confirmPassword"]`);
	await element[0].click({ clickCount: 2 });

	element = await page.$x(`//*[@id="confirmPassword"]`);
	await element[0].type(`Password2020!`);

	try {
        await synthetics.takeScreenshot("enter correct password", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//*[@id="mat-input-10"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-10"]`);
	await element[0].type(`sin`);

	element = await page.$x(`//mat-option[@id='mat-option-1518']/span`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-11"]`);
	await element[0].click();

	try {
        await synthetics.takeScreenshot("entre next page", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//*[@id="mat-input-11"]`);
	await element[0].type(`singa`);

	element = await page.$x(`//*[@id="mat-option-2385"]`);
	await element[0].click();

	element = await page.$x(`//form[@id='kt_form']/div[5]/div/div[3]`);
	await element[0].click();



	element = await page.$x(`//*[@id="companyName"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="companyName"]`);
	await element[0].type(`d`);

	try {
        await synthetics.takeScreenshot("enter companyName as d", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//form[@id='kt_form']/div[2]/div[2]/div/div`);
	await element[0].click();

	element = await page.$x(`//form[@id='kt_form']/div[5]/div/div[3]`);
	await element[0].click();

	element = await page.$x(`//form[@id='kt_form']/div[5]/div/div[3]`);
	await element[0].click();

	element = await page.$x(`//form[@id='kt_form']/div[5]/div/div[2]`);
	await element[0].click();

	element = await page.$x(`//form[@id='kt_form']/div[5]/div/div[2]`);
	await element[0].click();

	try {
        await synthetics.takeScreenshot("End of forwarder registration page", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

    await browser.close();
})();
