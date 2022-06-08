Cypress.Commands.add('openPage', (name) => {
    cy.SetCookie('tokenp_', 'Y2F1MTY1MzYzMg==').visit('https://www.demoblaze.com/' + name)
})

import 'cypress-iframe'
import '@testing-library/cypress/add-commands'
import "cypress-localstorage-commands";
