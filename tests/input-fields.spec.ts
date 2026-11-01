import { test, expect } from '@playwright/test';

test.beforeEach( async({page}) => {
  await page.goto('/')
 })
  
  //Edit cat type
  test('Edit cat pet type', async ({ page }) => {
    await page.getByText('Pet Types', { exact: true }).click();
    //check Pet Types heading
    await expect(page.locator('h2')).toHaveText('Pet Types');
    const cat = page.locator('[id="0"]');
    await expect(cat).toBeVisible();
    await page.getByRole('button',{name:'Edit'}).first().click();
    const firstpetTypeInput=page.getByRole('textbox');
    await expect(firstpetTypeInput).toBeVisible();
    await expect(firstpetTypeInput).toHaveValue('cat');
    await firstpetTypeInput.fill('rabbit');
    const updatebtn=page.getByRole('button',{name:'Update'});
    await expect(updatebtn).toBeVisible();
    await updatebtn.click();
    //click on update
    await page.getByRole('button',{name:'Edit'}).first().click();
    const secondpetTypeInput=page.getByRole('textbox');
    await expect(secondpetTypeInput).toBeVisible();
    await expect(secondpetTypeInput).toBeEditable();
    await expect(secondpetTypeInput).toHaveValue('rabbit');
    await secondpetTypeInput.fill('cat');
    await expect(updatebtn).toBeVisible();
    await updatebtn.click();
    await expect(cat).toHaveValue('cat');
    
    });
        
