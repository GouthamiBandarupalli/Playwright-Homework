import { test, expect } from '@playwright/test';

test.beforeEach( async({page}) => {
  await page.goto('/')
 })
  //Edit cat type
  test('Edit cat pet type', async ({ page }) => {
    //Select the PET TYPES menu item in the navigation bar
    await page.getByText('Pet Types', { exact: true }).click();
    //Add assertion of the "Pet Types" text displayed above the table with the list of pet types
    await expect(page.locator('h2')).toHaveText('Pet Types');
    //Click on "Edit" button for the "cat" pet type
    await page.getByRole('row',{name:'cat'}).getByRole('button',{name:'Edit'}).click();
    //Add assertion of the "Edit Pet Type" text displayed
    await expect(page.locator('h2')).toHaveText('Edit Pet Type');    
    //Change the pet type name from "cat" to "rabbit" and click "Update" button
    await expect(page.getByRole('textbox')).toHaveValue('cat');
    await page.getByRole('textbox').fill('rabbit');
    await page.getByRole('button',{name:'Update'}).click();
    //Click on "Edit" button for the same "rabbit" pet type
    await page.getByRole('row',{name:'rabbit'}).getByRole('button',{name:'Edit'}).click();
    //Add the assertion that the first pet type in the list of types has a value "rabbit" 
    await expect(page.getByRole('textbox')).toHaveValue('rabbit');
    //Change the pet type name back from "rabbit" to "cat" and click "Update" button
    await page.getByRole('textbox').fill('cat');
    await page.getByRole('button',{name:'Update'}).click();
    //Add assertion that the first pet type in the list of names has a value "cat"
    await expect(page.locator('[id="0"]')).toHaveValue('cat');
    });
        
