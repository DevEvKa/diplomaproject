import { setup, createPage } from "@nuxt/test-utils/e2e"
import { describe, test, expect } from "vitest"

describe('app', async () => {
  await setup()

  test('should navigate right with playwright', async () => {
    const page = await createPage()
    await page.goto('http://localhost:3333/');
    await page.getByRole('link', { name: 'пройти тестирование' }).click();
    await expect(page.getByText('Проверка знаний')).toBeTruthy();
    await page.getByRole('link', { name: 'Журнал' }).click();
    await expect(page.getByText('Статьи')).toBeTruthy();
    await page.getByRole('link', { name: 'Подробнее' }).first().click();
    await page.getByRole('link', { name: 'Задания' }).click();
    await expect(page.getByText('Темы')).toBeTruthy();  
  })
})


