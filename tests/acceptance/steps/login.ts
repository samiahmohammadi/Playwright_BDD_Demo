
import {After, Before, setDefaultTimeout} from '@cucumber/cucumber';
import test from '@playwright/test';
import  {Browser, chromium, Page} from 'playwright';

let page: Page;
let browser: Browser;
let username: string;
let password: string;

test ("login test demo", async() =>{
const context = await browser.newContext();
    const page = await context.newPage();
await page.goto("https://business.qa.truetale.io/")
await page.hover("https://business.qa.truetale.io/login")
    //await page.click("text=Login")
    await page.click("'Login'")
    await page.fill("input[name='email']", "samiahmohammadi13@gmail.com")
    await page.fill("input[name='password']", "Test123$")
    //await page.locator('id=email').fill(username);
    //await page.locator('id=current-password').fill(password);
    page.locator('button[type=submit] >> "Log in"').click(),
    //await page.click("input[value='Login']");
    await page.close();
    await context.close();
    await browser.close();
});