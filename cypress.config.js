const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    pmtool_url: "https://tredgate.com/pmtool/index.php?",
    eshop_url: "https://tredgate.com/eshop",
    webtrain_url: "https://tredgate.com/webtrain",
    automation_test_store_url: "https://automationteststore.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://tredgate.com/pmtool",
  },
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
});
