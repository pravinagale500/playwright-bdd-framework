# playwright-bdd-framework

## Playwright BDD Framework Setup Guide

This project is a Playwright automation framework using JavaScript, Cucumber (BDD), and the Page Object Model (POM) pattern. It supports cross-browser and parallel execution.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

### 1. Clone the Repository
```
git clone https://github.com/pravinagale500/playwright-bdd-framework.git
cd playwright-bdd-framework
```

### 2. Install Dependencies
```
npm install
```

### 3. Project Structure

```
├── config/              # Environment configuration
│   └── env.js
├── pages/               # Page Object Model classes
│   ├── BasePage.js
│   └── LoginPage.js
├── tests/
│   ├── features/        # Gherkin feature files
│   │   └── login.feature
│   ├── hooks/           # Cucumber hooks
│   │   └── hooks.js
│   └── stepDefinitions/ # Step definitions for features
│       └── loginSteps.js
├── utils/               # Utility classes
│   ├── BrowserManager.js
│   └── TabHandler.js
├── package.json         # Project metadata and scripts
├── .gitignore           # Files/folders ignored by git
└── README.md            # Project documentation
```

### 4. Running Tests

- Run all tests:
	```
	npm test
	```
- Run tests in parallel:
	```
	npm run test:parallel
	```
- Retry failed tests:
	```
	npm run test:retry
	```
- Run tests in a specific browser:
	```
	npm run test:chrome    # Chromium
	npm run test:firefox   # Firefox
	npm run test:webkit    # Webkit
	```
- Run tests against staging environment:
	```
	npm run test:staging
	```

### 5. Useful Scripts
- Clean and reinstall dependencies:
	```
	npm run reinstall
	```

### 6. Notes
- node_modules is excluded from git tracking via .gitignore.
- Feature files are written in Gherkin syntax under `tests/features/`.
- Step definitions and hooks are in `tests/stepDefinitions/` and `tests/hooks/`.

---
For any issues, please open an issue on the repository or contact the author.