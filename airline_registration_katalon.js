const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
    const page = await browser.newPage();
    let element, formElement, tabs;

     // Refer to document : https://docs.google.com/spreadsheets/d/1RbuKcwAHrZm0PPlWmpAd17_3UYO1rnQNw_TOQ58ch5w/edit?ts=5ed5a74e#gid=434813350.

    await page.goto(`https://app.testing.cargoai.co/auth/register-airline/anmol006@e.ntu.edu.sg?token=62d6bec6-a000-49c5-9e6a-1aba00ca8dc9`, { waitUntil: 'networkidle0' });

    try {
        await synthetics.takeScreenshot("Enter Airlines Registration page", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//form[@id='kt_form']/div/div[2]/kt-register-user-details/div/div[2]/div/mat-form-field/div/div/div[3]`);
	await element[0].click();


	element = await page.$x(`//*[@id="accountName"]`);
	await element[0].type(`singapore airlines`);

	element = await page.$x(`//form[@id='kt_form']/div/div[2]/kt-register-user-details/div/div`);
	await element[0].click();

	element = await page.$x(`//*[@id="accountName"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="accountName"]`);
	await element[0].type(`singapore airlines -2`);

	element = await page.$x(`//form[@id='kt_form']/div/div[2]/kt-register-user-details/div/div[3]/div/mat-form-field/div/div/div[3]`);
	await element[0].click();

	element = await page.$x(`//*[@id="password"]`);
	await element[0].type(`1234`);

	element = await page.$x(`//*[@id="confirmPassword"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="confirmPassword"]`);
	await element[0].type(`abcd`);

	try {
        await synthetics.takeScreenshot("Adding wrong and not matching password", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//form[@id='kt_form']/div/div[2]/kt-register-user-details/div/div[2]/div[2]`);
	await element[0].click();

	element = await page.$x(`//form[@id='kt_form']/div/div[2]/kt-register-user-details/div/div[3]/div/mat-form-field/div/div/div[3]`);
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
        await synthetics.takeScreenshot("Enter valid and right password", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//*[@id="mat-input-2"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-2"]`);
	await element[0].type(`sin`);

	element = await page.$x(`//mat-option[@id='mat-option-4221']/span`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-3"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-3"]`);
	await element[0].type(`singa`);

	element = await page.$x(`//*[@id="mat-option-5088"]`);
	await element[0].click();

	try {
        await synthetics.takeScreenshot("Enter the basic Arilines Detail", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//*[@id="next-btn"]`);
	await element[0].click();


	try {
        await synthetics.takeScreenshot("Enter Origin airlines", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }


	element = await page.$x(`//form[@id='kt_form']/div[2]/div[2]/kt-register-airline-office-details/div/kt-register-airline-details/div/div/div/mat-form-field/div/div/div[3]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-12"]`);
	await element[0].type(`sin`);

	element = await page.$x(`//mat-option[@id='mat-option-386']/span`);
	await element[0].click();

	element = await page.$x(`//mat-checkbox[@id='mat-checkbox-2']/label/div`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-17"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-17"]`);
	await element[0].type(`sin`);

	element = await page.$x(`//div[@id='kt_login']/div/div/kt-register-airline/div`);
	await element[0].click();

	element = await page.$x(`//*[@id="next-btn"]`);
	await element[0].click();


	try {
        await synthetics.takeScreenshot("Enter Airlines Registration page", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//*[@id="mat-chip-list-input-0"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-chip-list-input-0"]`);
	await element[0].type(`sin`);

	element = await page.$x(`//*[@id="mat-autocomplete-3"]`);
	await element[0].click();

	element = await page.$x(`//div[@id='kt_login']/div/div/kt-register-airline/div`);
	await element[0].click();

	element = await page.$x(`//*[@id="next-btn"]`);
	await element[0].click();


	try {
        await synthetics.takeScreenshot("Enter Products ", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }

	element = await page.$x(`//*[@id="mat-chip-list-input-1"]`);
	await element[0].click();

	element = await page.$x(`//mat-option[@id='mat-option-2693']/span`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-14"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-14"]`);
	await element[0].type(`0.1`);

	element = await page.$x(`//*[@id="kt_wizard_v1"]`);
	await element[0].click();

	element = await page.$x(`//form[@id='kt_form']/div[4]/div[2]/div/kt-register-airline-information/div/div/div/div[2]/mat-form-field/div/div/div[3]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-14"]`);
	await element[0].type(`1`);

	element = await page.$x(`//*[@id="kt_form"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="submit-btn"]`);
	await element[0].click();


	try {
        await synthetics.takeScreenshot("finishing the registration part", 'result');
    } catch (ex) {
        synthetics.addExecutionError('Unable to capture screenshot.', ex);
    }


    await browser.close();
})();
