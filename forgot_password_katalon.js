const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
    const page = await browser.newPage();
    let element, formElement, tabs;

    await page.goto(`https://app.testing.cargoai.co/auth/login`, { waitUntil: 'networkidle0' });

	element = await page.$x(`//a[contains(text(),'Forgot Password')]`);
	await element[0].click();
	await page.waitForNavigation();

	element = await page.$x(`//*[@id="mat-input-2"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-2"]`);
	await element[0].type(`aaa`);

	element = await page.$x(`//*[@id="kt_password_submit"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-2"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-2"]`);
	await element[0].type(`aaa@.com`);

	element = await page.$x(`//*[@id="kt_password_submit"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-2"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-2"]`);
	await element[0].type(``);

	element = await page.$x(`//*[@id="mat-input-2"]`);
	await element[0].type(`teamcargoai+sq_sin@gmail.com`);

	element = await page.$x(`//*[@id="kt_password_submit"]`);
	await element[0].click();

	element = await page.$x(`//input[@type='text']`);
	await element[0].click();

	element = await page.$x(`//input[@type='text']`);
	await element[0].type(`1`);

	element = await page.$x(`(//input[@type='text'])[2]`);
	await element[0].type(`1`);

	element = await page.$x(`(//input[@type='text'])[3]`);
	await element[0].type(`1`);

	element = await page.$x(`(//input[@type='text'])[4]`);
	await element[0].type(`1`);

	element = await page.$x(`(//input[@type='text'])[5]`);
	await element[0].type(`1`);

	element = await page.$x(`(//input[@type='text'])[6]`);
	await element[0].type(`1`);

	element = await page.$x(`//*[@id="password"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="password"]`);
	await element[0].type(`cargoai`);

	element = await page.$x(`//*[@id="kt_submit"]`);
	await element[0].click();
    await browser.close();
})();
