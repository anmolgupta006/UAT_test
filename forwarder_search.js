const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto('https://app.testing.cargoai.co/forwarder/search/forwarder-search')
  
  await page.setViewport({ width: 714, height: 821 })
  
  await page.waitForSelector('.search-form #input-detail-btn')
  await page.click('.search-form #input-detail-btn')
  
  await page.waitForSelector('.search-form #input-detail-btn')
  await page.click('.search-form #input-detail-btn')
  
  await page.waitForSelector('.search-form #input-detail-btn')
  await page.click('.search-form #input-detail-btn')
  
  await page.waitForSelector('div #add-piece-btn')
  await page.click('div #add-piece-btn')
  
  await page.waitForSelector('.kt-portlet > .kt-portlet__body > .row > .col-xl-2:nth-child(2) > .form-group')
  await page.click('.kt-portlet > .kt-portlet__body > .row > .col-xl-2:nth-child(2) > .form-group')
  
  await page.waitForSelector('.kt-portlet__body #length')
  await page.click('.kt-portlet__body #length')
  
  await page.waitForSelector('.kt-portlet__body #width')
  await page.click('.kt-portlet__body #width')
  
  await page.waitForSelector('.kt-portlet__body #width')
  await page.click('.kt-portlet__body #width')
  
  await page.waitForSelector('.kt-portlet__body #height')
  await page.click('.kt-portlet__body #height')
  
  await page.waitForSelector('.kt-portlet__body #height')
  await page.click('.kt-portlet__body #height')
  
  await page.waitForSelector('.kt-portlet__body #weight')
  await page.click('.kt-portlet__body #weight')
  
  await page.waitForSelector('.kt-portlet__body #weight')
  await page.click('.kt-portlet__body #weight')
  
  await page.waitForSelector('.radio-group > #mat-radio-6 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle')
  await page.click('.radio-group > #mat-radio-6 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle')
  
  await page.waitForSelector('.kt-portlet #save-btn')
  await page.click('.kt-portlet #save-btn')
  
  await browser.close()
})()