import { Page } from '@playwright/test';
import {test as it} from '@playwright/test';

it.describe('FORM LAYOUTS', () =>{

    it.beforeEach(async({page}) => {
        await page.goto('http://localhost:4200/pages/forms/layouts')
    });

    it('Inline form', async ({page}) =>{
        await page.goto('http://localhost:4200/pages/forms/layouts')
        await page.locator('[placeholder="Jane Doe"]').fill('Daryna')
        await page.locator('[placeholder="Jane Doe"] ~ input[placeholder="Email"]').fill('test@gmail.com')
        await page.locator('.custom-checkbox').nth(0).check()
        await page.locator('[class="appearance-filled size-medium shape-rectangle status-primary nb-transition"]').nth(0).click()
    })
    it('Using the Grid', async ({page}) => {
        await page.goto('http://localhost:4200/pages/forms/layouts')
        await page.locator('[placeholder="Email"]').nth(1).fill('test@gmail.com')
        await page.locator('[id="inputPassword2"]').fill('123password')
        await page.locator('[class="inner-circle"]').nth(0).check()
        await page.locator('[class="inner-circle"]').nth(1).check()
        await page.locator('[status="primary"]').nth(2).click()
    })
    it('Basic form', async ({page}) => {
        await page.goto('http://localhost:4200/pages/forms/layouts')
        await page.locator('[type="email"]').nth(1).fill('test@gmail.com')
        await page.locator('[class="label"] ~ input[type="password"]').fill('password12345')
        await page.locator('[class="custom-checkbox"]').nth(1).check()
        await page.locator('[status="danger"]').click()
    })
    it('Form without labels', async ({page}) => {
        await page.goto('http://localhost:4200/pages/forms/layouts')
        await page.locator('[placeholder="Recipients"]').fill('Daryna')
        await page.locator('[placeholder="Subject"]').fill('text example')
        await page.locator('[placeholder="Message"]').fill('Message Test Example Here')
        await page.locator('[status="success"]').click() 
    })
    it('Horizontal form', async ({page}) => {
        await page.goto('http://localhost:4200/pages/forms/layouts')
        await page.locator('[id="inputEmail3"]').fill('test@gmail.com')
        await page.locator('[id="inputPassword3"]').fill('password12345')
        await page.locator('[class="custom-checkbox"]').nth(2).click()
        await page.locator('[status="warning"]').click()
    })
    it('Block form', async ({page}) => {
        await page.goto('http://localhost:4200/pages/forms/layouts')
        await page.locator('[id="inputFirstName"]').fill('Daryna')
        await page.locator('[placeholder="Last Name"]').fill('Khvorova')
        await page.locator('[id="inputEmail"]').fill('test@gmail.com')
        await page.locator('[id="inputWebsite"]').fill('google.com')
        await page.locator('[class="appearance-filled size-medium shape-rectangle status-basic nb-transition"]').click() 
    })
})