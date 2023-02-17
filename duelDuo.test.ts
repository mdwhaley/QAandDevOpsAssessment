
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays the div with id = choices', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const drawButton = driver.findElement(By.id("draw"))
    const choicesDisplayed = await choices.isDisplayed()
    await drawButton.click()
    expect(choicesDisplayed).toBe(true)
})