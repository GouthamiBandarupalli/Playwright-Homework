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
    await page.getByRole('button',{name:'Edit'}).first().click();
    const petTypeInput=page.getByRole('textbox');
    await expect(petTypeInput).toBeVisible();
    await expect(petTypeInput).toHaveValue('cat');
    await petTypeInput.fill('rabbit');
    const updatebtn=page.getByRole('button',{name:'Update'});
    await expect(updatebtn).toBeVisible();
    await updatebtn.click();
    //click on update
    await page.getByRole('button',{name:'Edit'}).first().click();
    await expect(petTypeInput).toHaveValue('rabbit');
    await petTypeInput.fill('cat');
    await expect(updatebtn).toBeVisible();
    await updatebtn.click();
    await expect(cat).toHaveValue('cat');
    
    });
        
