# 🧪 Automation Testing (Mocha + Chai + Selenium)

Proyek ini adalah contoh **Automation Testing End-to-End (E2E)** untuk website [SauceDemo](https://www.saucedemo.com/) menggunakan:

- [Selenium WebDriver](https://www.selenium.dev/) → untuk automation browser
- [Mocha](https://mochajs.org/) → framework testing
- [Chai](https://www.chaijs.com/) → assertion library
- [Mochawesome](https://github.com/adamgruber/mochawesome) → HTML test report

Test ini mencakup **Login → Add to Cart → Checkout Produk**.

---

## 🚀 Fitur
✅ Login ke SauceDemo dengan user standar  
✅ Menambahkan produk ke keranjang  
✅ Checkout hingga selesai  
✅ Validasi pesan sukses **"Thank you for your order!"**  
✅ Mendukung **headless mode** (untuk CI/CD pipeline)  
✅ Bisa generate **HTML report** dengan Mochawesome

---

## 📂 Struktur Project
``` 
selenium-mocha-chai/
├── package.json
├── package-lock.json
├── login.test.json
├── mochawesome-report/
```
