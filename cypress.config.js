const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "monkey-cypress.io.github.thesoftwaredesignlab",
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: 'monkey-report',
    overwite: true,
    json: true,
    charts: true, 
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://losestudiantes.com/",
  },
  env: {
    seed: 0xf1ae533d,
    delay: 1000,
    actions: {
      click: 10,
      scroll: 5,
      keypress: 10,
      viewport: 2,
      navigation: 4,

      smartClick: 5,
      smartCleanup: 2,
      smartInput: 5,
    },
  },
  pageLoadTimeout: 120000,
  screenshotsFolder: "cypress/results/screenshots",

  videosFolder: "cypress/results/videos",
  video: true,
  videoCompression: 32,
});
