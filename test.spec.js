const {test} = require("@playwright/test");

test("Do a test", async ({page}) => {
    await page.goto("https://www.example.com");
});
