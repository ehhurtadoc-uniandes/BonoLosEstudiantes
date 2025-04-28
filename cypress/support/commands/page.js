const orientations = ["portrait", "landscape"];
const viewports = [
  "ipad-2",
  "ipad-mini",
  "iphone-3",
  "iphone-4",
  "iphone-5",
  "iphone-6",
  "iphone-6+",
  "iphone-x",
  "iphone-xr",
  "macbook-11",
  "macbook-13",
  "macbook-15",
  "samsung-note9",
  "samsung-s10",
];

Cypress.Commands.add("rViewport", (randomFn, callback) => {
  const viewport = viewports[randomFn(0, viewports.length - 1)];
  const orientation = orientations[randomFn(0, orientations.length - 1)];
  cy.viewport(viewport, orientation);

  callback({
    title: "Viewport",
    value: { viewport, orientation },
  });

  return cy.window();
});

const reload = () => cy.reload();

const navigateForward = () => cy.go(1);

const navigateBack = () => {
  cy.url().then((url) => {
    if (Cypress.config().baseUrl !== url) cy.go(-1);
  });
};

Cypress.Commands.add("rNavigation", (randomFn, callback) => {
  const actions = [reload, navigateForward, navigateBack];
  const names = ["reload", "navigate forward", "navigate backward"];

  const index = randomFn(0, actions.length - 1);
  actions[index]();

  callback({
    title: "Navigation",
    value: { type: names[index] },
  });
});

const clearLocalStorage = () => {
  cy.clearLocalStorage();
};
const clearCookies = () => {
  cy.clearCookies();
};

const clearInput = (randomFn) => {
  cy.get("input").then(($candidates) => {
    const $visibleCandidates = $candidates
      .filter((_i, candidate) => !Cypress.dom.isHidden(candidate))
    if ($visibleCandidates.length) {
      const index = randomFn(0, $visibleCandidates.length - 1);
      cy.wrap($visibleCandidates[index]).clear();
    }
  });
};

Cypress.Commands.add("rCleanup", (randomFn, callback) => {
  const actions = [clearLocalStorage, clearCookies, clearInput];
  const names = ["clear local storage", "clear cookies", "clear input"];

  const index = randomFn(0, actions.length - 1);
  actions[index](randomFn);

  callback({
    title: "Data Clean Up",
    value: { type: names[index] },
  });
});
