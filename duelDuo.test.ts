
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://18.117.216.101:4001/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays the div with choices', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const drawButton = driver.findElement(By.id("draw")).click();
    const choicesDisplayed = await choices.isDisplayed()
    await driver.sleep(2000);
})

test('Add to duo button adds bot card to duo', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const drawButton = driver.findElement(By.id("draw")).click();
    const choicesDisplayed = await choices.isDisplayed()
    const addDuoButton = driver.findElement(By.className("bot-btn")).click();
    const yourDuo = await driver.findElement(By.id('player-duo'))
    await driver.sleep(2000);
})