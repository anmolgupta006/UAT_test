const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1920, height: 1080 }, args: ['--start-maximized'] });
    const page = await browser.newPage();
    let element, formElement, tabs;

    await page.goto(`https://app.testing.cargoai.co/forwarder/search/forwarder-search`, { waitUntil: 'networkidle0' });

	element = await page.$x(`//*[@id="mat-input-2"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="mat-input-2"]`);
	await element[0].type(`BLR - Bengaluru Kempegowda Intl`);

	element = await page.$x(`//*[@id="input-detail-btn"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="add-piece-btn"]`);
	await element[0].click();

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

	element = await page.$x(`//*[@id="save-btn"]`);
	await element[0].click();

	element = await page.$x(`//*[@id="search-btn"]`);
	await element[0].click();

	element = await page.$x(`//mat-expansion-panel-header[@id='mat-expansion-panel-header-0']/span/mat-panel-title/label[2]`);
	await element[0].click();

	element = await page.$x(`//div[@id='cdk-accordion-child-0']/div/div[2]/div/ul/li[2]/label`);
	await element[0].click();

	element = await page.$x(`//mat-expansion-panel-header[@id='mat-expansion-panel-header-0']/span/mat-panel-title/label[2]`);
	await element[0].click();

	element = await page.$x(`//div[@id='kt_content']/div/kt-forwarder/kt-search-result/div/div/div/div[2]/div/label/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='kt_content']/div/kt-forwarder/kt-search-result/div/div/div/div[2]/div/label/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='kt_content']/div/kt-forwarder/kt-search-result/div/div/div/div[2]/div[3]/label[2]/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='kt_content']/div/kt-forwarder/kt-search-result/div/div/div/div[2]/div[3]/label[2]/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='sort-cheapest']/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='sort-earliest']/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='sort-quality']/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='sort-fastest']/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='sort-quality']/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='sort-earliest']/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='sort-cheapest']/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='sort-best']/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='kt_content']/div/kt-forwarder/kt-search-result/div/div/div/div[4]/div/div[2]/div/ng5-slider/span[12]/span[2]/ng5-slider-tooltip-wrapper/div`);
	await element[0].click();

	element = await page.$x(`//div[@id='kt_content']/div/kt-forwarder/kt-search-result/div/div/div/div[4]/div/div[2]/div/ng5-slider/span[12]/span/ng5-slider-tooltip-wrapper/div`);
	await element[0].click();

	element = await page.$x(`//div[@id='kt_content']/div/kt-forwarder/kt-search-result/div/div/div/div[4]/div/div[2]/div/ng5-slider/span[4]`);
	await element[0].click();

	element = await page.$x(`//div[@id='kt_content']/div/kt-forwarder/kt-search-result/div/div/div/div[4]/div/div[2]/div/ng5-slider/span[3]/span`);
	await element[0].click();

	element = await page.$x(`//div[@id='kt_content']/div/kt-forwarder/kt-search-result/div/div/div/div[4]/div/div[3]/div/button/span`);
	await element[0].click();

	element = await page.$x(`(//button[@type='button'])[2]`);
	await element[0].click();

	element = await page.$x(`//mat-checkbox[@id='mat-checkbox-16']/label/div`);
	await element[0].click();

	element = await page.$x(`//div[@id='kt_content']/div/kt-forwarder/kt-search-result/div/div/div/div[4]/div/div[3]/div/button/span`);
	await element[0].click();
    await browser.close();
})();
