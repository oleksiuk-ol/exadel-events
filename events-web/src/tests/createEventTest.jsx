const puppeteer = require("puppeteer");

const materialSelect = async (page, newSelectedValue, cssSelector) => {
  await page.evaluate(
    (newSelectedValue, cssSelector) => {
      let clickEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
      });
      let selectNode = document.querySelector(cssSelector);
      selectNode.dispatchEvent(clickEvent);
      [...document.querySelectorAll("li")]
        .filter((el) => el.innerText === newSelectedValue)[0]
        .click();
    },
    newSelectedValue,
    cssSelector
  );
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3002/createEvent");
  await page.type("#name_input", "Test name");
  await page.type("#description_input", "Test description");
  await page.type("#start_date_input", "13052022");
  await page.type("#end_date_input", "15052022");
  await materialSelect(page, "Offline", "#type_select");
  await page
    .waitForSelector("#address_input", { visible: true })
    .then(() => page.type("#address_input", "Warsaw"));

  await page.click("#form_submit");

  await page.screenshot({ path: "createEvent.png" });

  await browser.close();
})();
