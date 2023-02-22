const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  const options = {
    webpackOptions: {
    module: {
    rules: [
    {
      test: /\.feature$/,
      use: [
    {
      loader: '@badeball/cypress-cucumber-preprocessor/webpack',
      options: config,
    },
            ],
    },
        ],
      },
    },
  };
  on('file:preprocessor', webpackPreprocessor(options));
  return config;
  
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents,
  },
});