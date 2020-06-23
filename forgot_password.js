const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.goto('https://app.testing.cargoai.co/auth/login')
  
  await page.setViewport({ width: 1440, height: 821 })
  
  await page.waitForSelector('.kt-login__body > .kt-login__form > .kt-form > .kt-login__actions > .kt-link')
  await page.click('.kt-login__body > .kt-login__form > .kt-form > .kt-login__actions > .kt-link')
  
  await page.waitForSelector('.mat-form-field #mat-input-2')
  await page.click('.mat-form-field #mat-input-2')
  
  await page.waitForSelector('.kt-login__body #kt_password_submit')
  await page.click('.kt-login__body #kt_password_submit')
  
  await page.waitForSelector('.mat-form-field #mat-input-2')
  await page.click('.mat-form-field #mat-input-2')
  
  await page.waitForSelector('.kt-login__body #kt_password_submit')
  await page.click('.kt-login__body #kt_password_submit')
  
  await page.waitForSelector('.mat-form-field #mat-input-2')
  await page.click('.mat-form-field #mat-input-2')
  
  await page.waitForSelector('.kt-login__body #kt_password_submit')
  await page.click('.kt-login__body #kt_password_submit')
  
  await page.waitForSelector('.ng-star-inserted > .otp-container > .ng-star-inserted > ngx-split-input > input:nth-child(1)')
  await page.click('.ng-star-inserted > .otp-container > .ng-star-inserted > ngx-split-input > input:nth-child(1)')
  
  await page.waitForSelector('.mat-form-field #password')
  await page.click('.mat-form-field #password')
  
  await page.waitForSelector('.ng-star-inserted #kt_submit')
  await page.click('.ng-star-inserted #kt_submit')
  
  await browser.close()
})()