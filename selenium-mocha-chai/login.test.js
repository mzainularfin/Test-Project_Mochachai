import { Builder, By, until } from "selenium-webdriver";
import { expect } from "chai";
import chrome from "selenium-webdriver/chrome.js";
import 'chromedriver'; // penting supaya webdriver tahu path chromedriver

describe("SauceDemo Login Test", function () {
  this.timeout(60000); // kasih waktu lebih lama

  let driver;

  before(async function () {
    console.log("🔹 Start Chrome dengan WebDriver Manager...");
    const options = new chrome.Options();
    // Coba headless biar stabil
    options.addArguments("--headless", "--no-sandbox", "--disable-dev-shm-usage");
    driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();
    await driver.manage().window().maximize();
  });

  after(async function () {
    console.log("🔹 Quit browser...");
    if (driver) await driver.quit();
  });

  it("should complete checkout successfully", async function () {
    // 1. Buka website
    await driver.get("https://www.saucedemo.com/");

    // 2. Login
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    // Pastikan halaman produk terbuka
    await driver.wait(until.elementLocated(By.className("inventory_list")), 10000);

    // 3. Klik "Add to Cart" produk pertama
    await driver.findElement(By.css(".inventory_item button")).click();

    // 4. Klik Cart Icon
    await driver.findElement(By.className("shopping_cart_link")).click();

    // Pastikan halaman cart muncul
    await driver.wait(until.elementLocated(By.className("cart_list")), 10000);

    // 5. Klik Checkout
    await driver.findElement(By.id("checkout")).click();

    // 6. Isi Form Checkout
    await driver.findElement(By.id("first-name")).sendKeys("John");
    await driver.findElement(By.id("last-name")).sendKeys("Doe");
    await driver.findElement(By.id("postal-code")).sendKeys("12345");

    // Klik Continue
    await driver.findElement(By.id("continue")).click();

    // Pastikan halaman overview muncul
    await driver.wait(until.elementLocated(By.className("summary_info")), 10000);

    // 7. Klik Finish
    await driver.findElement(By.id("finish")).click();

    // 8. Verifikasi halaman selesai checkout
    const completeHeader = await driver
      .findElement(By.className("complete-header"))
      .getText();

    expect(completeHeader).to.equal("Thank you for your order!");
  });
});