describe('Los estudiantes under monkeys', function() {
  it('visits los estudiantes and survives monkeys', function() {
    cy.visit('https://losestudiantes.co');
    cy.wait(1000);
    randomEvent(1000);
  })
})

function randomEvent(monkeysLeft) {
  if (monkeysLeft > 0) {
    const events = ['clickLink', 'fillText', 'selectCombo', 'clickButton'];
    const chosenEvent = events[Math.floor(Math.random() * events.length)];

    cy.document().then(doc => {
      if (chosenEvent === 'clickLink') {
        const $links = doc.querySelectorAll('a');
        if ($links.length > 0) {
          const el = $links[Math.floor(Math.random() * $links.length)];
          if (!Cypress.dom.isHidden(el)) {
            cy.wrap(el).click({ force: true });
          }
        }

      } else if (chosenEvent === 'fillText') {
        const $inputs = doc.querySelectorAll('input[type="text"], textarea');
        if ($inputs.length > 0) {
          const el = $inputs[Math.floor(Math.random() * $inputs.length)];
          if (!Cypress.dom.isHidden(el)) {
            cy.wrap(el).type('monkey{enter}', { force: true });
          }
        }

      } else if (chosenEvent === 'selectCombo') {
        const $selects = doc.querySelectorAll('select');
        if ($selects.length > 0) {
          const el = $selects[Math.floor(Math.random() * $selects.length)];
          const options = el.options;
          if (options.length > 0) {
            const randomValue = options[Math.floor(Math.random() * options.length)].value;
            cy.wrap(el).select(randomValue, { force: true });
          }
        }

      } else if (chosenEvent === 'clickButton') {
        const $buttons = doc.querySelectorAll('button, input[type="submit"]');
        if ($buttons.length > 0) {
          const el = $buttons[Math.floor(Math.random() * $buttons.length)];
          if (!Cypress.dom.isHidden(el)) {
            cy.wrap(el).click({ force: true });
          }
        }
      }

      // Espera y continúa
      cy.wait(1000).then(() => {
        randomEvent(monkeysLeft - 1);
      });
    });
  }
}
