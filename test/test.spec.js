const {test, expect} = require("@playwright/test");

// use `yarn server` to start the backend server before running these tests

test("Do a test", async ({page}) => {
    await page.goto("http://localhost:3001");
    
    expect(await page.screenshot()).toMatchSnapshot("my-test.png");
});
