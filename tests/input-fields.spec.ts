import { test, expect } from '@playwright/test';

test.beforeEach( async({page}) => {
  await page.goto('/')
})

test('Home page is opened and Welcome message is displayed', async ({page}) => {
  await expect(page.locator('.title')).toHaveText('Welcome to Petclinic')
});
  
test('Click on Pet Types', async ({page}) => {
  await page.getByText('Pet Types', { exact: true }).click();
  // check heading
  await expect(page.locator('h2')).toHaveText('Pet Types');
});

test('Wait for a second', async ({page}) => {
  await page.waitForTimeout(1000);
});

test('Locate the cat input', async ({ page }) => {
  await page.getByText('Pet Types', { exact: true }).click();
  const cat = page.locator('[id="0"] ');
  await expect(cat).toBeVisible();
  //await cat.getByRole('button',{name:'Edit'}).first().click();
  });

  test('Edit cat pet type', async ({ page }) => {
    await page.getByText('Pet Types', { exact: true }).click();
    const cat = page.locator('[id="0"] ');
    await expect(cat).toBeVisible();
    console.log(
    'Edit anywhere:',
    await page.getByText('Edit', { exact: false }).count()
    );
    console.log('Number of pages',page.context().pages().length);
    for(const p of page.context().pages()){
        console.log('Page', p.url());
    }
    console.log("clicking edit");
    console.log("before screenshot");
    console.log("taking screenshot");

    await page.screenshot({
    path: 'before-edit.png',
    fullPage: true
    });
    console.log("cat count",await cat.count());
    await page.getByRole('button',{name:'Edit'}).first().click();
    const petTypeInput=page.getByRole('textbox');
    await expect(petTypeInput).toBeVisible();
    await petTypeInput.fill('Rabbit');
    //click on update
    await page.getByRole('button',{name:'Update'});
    const updatebutton=page.getByRole('button',{name:'Update'});
    await expect(updatebutton).toBeVisible();
    await updatebutton.click();
    await page.waitForTimeout(1000);
  });
        
