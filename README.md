# Cypress Login Automation with POM & Mochawesome Report

This repo automates login functionality using Cypress, Page Object Model (POM), and generates an HTML report with screenshots using Mochawesome.

## Repository Name: qa.code-quiz.dev---automation-testing-with-cypress
---
## Prerequisite Setup

First of all, clone and run this project locally:  
👉 https://github.com/MeldCX/qa-code-quiz

After that, set up and run the Cypress test project described below.

## Setup

> Bash commands<br>
```git clone https://github.com/noman2016/qa.code-quiz.dev---automation-testing-with-cypress.git```<br>
```cd your-repo```<br>
```npm install```<br>

## Configuration

### Install required reporters:

> Bash commands<br>
```npm install --save-dev cypress-mochawesome-reporter```

## Run Tests

> Bash commands<br>
```npx cypress run```

## Generate HTML Report

> Bash commands<br>
```npm run report```

### HTML report: cypress/reports/html/index.html

## Folder Structure

cypress/<br>
│   └── e2e/<br>
│       └── login.cy.js<br>
├── pages/<br>
│   └── LoginPages.js<br>
├── report/html/<br>
│   └── index.html<br>
└── screenshots/<br>

## Features

-Login test using Page Object Model (POM)<br>
-Functional, validation, and edge test cases<br>
-HTML report with screenshots on failure<br>

## Author
*Md. Abdullah Al Noman*
