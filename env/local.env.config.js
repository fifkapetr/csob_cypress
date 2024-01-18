const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
  env: {
    ...baseConfig.env,
  },
  e2e: {
    env: {
      pmtool_url: "https://google.com",
      eshop_url: "https://www.seznam.cz",
      automation_test_store_url: "https://yahoo.com",
    },
  },
};
