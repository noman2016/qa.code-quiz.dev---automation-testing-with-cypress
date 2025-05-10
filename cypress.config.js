const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportDir: 'cypress/reports/html',
    overwrite: true,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  }
});