<p align="center">
	<img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright Logo" width="120"/>
</p>

# 🎭 Playwright BDD Framework

![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-green)
![License](https://img.shields.io/badge/license-ISC-blue)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)



> 🚀 **End-to-end testing framework using Playwright, Cucumber (BDD), and Page Object Model.**

---

## ✨ Features

- 🧩 Modular Page Object Model (POM)
- 🥒 BDD with Cucumber and Gherkin
- 🌐 Cross-browser support (Chromium, Firefox, Webkit)
- ⚡ Parallel test execution
- 🔄 Retry failed tests
- 🔧 Easy environment configuration
- 🧹 Clean and reinstall scripts

---

This project is a Playwright automation framework using JavaScript, Cucumber (BDD), and the Page Object Model (POM) pattern. It supports cross-browser and parallel execution.


## 🛠️ Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)


## 📦 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/pravinagale500/playwright-bdd-framework.git
cd playwright-bdd-framework
```


### 2️⃣ Install Dependencies
```sh
npm install
```


## 🗂️ Project Structure

```text
├── config/              # 🌎 Environment configuration
│   └── env.js
├── pages/               # 📄 Page Object Model classes
│   ├── BasePage.js
│   └── LoginPage.js
├── tests/
│   ├── features/        # 🥒 Gherkin feature files
│   │   └── login.feature
│   ├── hooks/           # 🪝 Cucumber hooks
│   │   └── hooks.js
│   └── stepDefinitions/ # 📝 Step definitions
│       └── loginSteps.js
├── utils/               # 🛠️ Utility classes
│   ├── BrowserManager.js
│   └── TabHandler.js
├── package.json         # 📦 Project metadata and scripts
├── .gitignore           # 🚫 Ignored files/folders
└── README.md            # 📘 Documentation
```


## 🧪 Running Tests

- ▶️ Run all tests:
	```sh
	npm test
	```
- 🏃 Run tests in parallel:
	```sh
	npm run test:parallel
	```
- 🔁 Retry failed tests:
	```sh
	npm run test:retry
	```
- 🌐 Run tests in a specific browser:
	```sh
	npm run test:chrome    # Chromium
	npm run test:firefox   # Firefox
	npm run test:webkit    # Webkit
	```
- 🚀 Run tests against staging environment:
	```sh
	npm run test:staging
	```


## 🧹 Useful Scripts
- ♻️ Clean and reinstall dependencies:
	```sh
	npm run reinstall
	```


## 📖 Example

**Sample Gherkin Scenario (`tests/features/login.feature`):**
```gherkin
Feature: Login
	Scenario: Successful login
		Given I am on the login page
		When I enter valid credentials
		Then I should see the dashboard
```

**Sample Step Definition (`tests/stepDefinitions/loginSteps.js`):**
```js
const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the login page', async function () {
	await this.page.goto('https://example.com/login');
});

When('I enter valid credentials', async function () {
	await this.page.fill('#username', 'user');
	await this.page.fill('#password', 'pass');
	await this.page.click('button[type="submit"]');
});

Then('I should see the dashboard', async function () {
	await this.page.waitForSelector('#dashboard');
});
```

---

## 💡 Tips & Best Practices
- Keep your page objects modular and reusable.
- Use environment variables for sensitive data and URLs.
- Write clear, concise Gherkin scenarios.
- Use parallel execution for faster feedback.
- Keep node_modules out of version control (already handled by .gitignore).

## 🙋 Getting Help
- For issues, open a GitHub issue or contact the author.
- Explore [Playwright Docs](https://playwright.dev/) and [Cucumber Docs](https://cucumber.io/docs/) for more info.

---

---

<p align="center">
	<b>Happy Testing! 🎉</b>
</p>