const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3002/auth");
  await page.type("#email_input", "admin@gmail.com");
  await page.type("#password_input", "1234");
  await page.click("#auth_submit");
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "auth.png" });

  await browser.close();
})();
