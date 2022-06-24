const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
  viewportHeight: 1080,
  viewportWidth: 1980,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    userLogin:'cypresstestsemail0003@gmail.com',
    userPassword:'123QWE321',
    baseUrl:'https://www.onliner.by/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
     excludeSpecPattern: ['**/1-getting-started/*', '2-advanced-examples/*']
  },
});
