# qa.code-quiz.dev---automation-testing-with-cypress
qa.code-quiz.dev - automation testing with cypress

# Cypress Login Automation with POM & Mochawesome Report

This repo automates login functionality using Cypress, Page Object Model (POM), and generates an HTML report with screenshots using Mochawesome.

---

## Setup

```bash
git clone https://github.com/noman2016/qa.code-quiz.dev---automation-testing-with-cypress.git
cd your-repo
npm install

## Configuration
### Install required reporters:

```bash
npm install --save-dev cypress-mochawesome-reporter

## Run Tests
```bash
npx cypress run

## Generate HTML Report

```bash
npm run report

### HTML report: cypress/reports/html/index.html

## Folder Structure

cypress/
│   └── e2e/
│       └── login.cy.js
├── pages/
│   └── LoginPages.js
├── report/html/
│   └── index.html
└── screendhots/

## Features

Login test using Page Object Model (POM)
Functional, validation, and edge test cases
HTML report with screenshots on failure

## Author
Md. Abdullah Al Noman