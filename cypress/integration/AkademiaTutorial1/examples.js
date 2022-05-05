/// <reference types="cypress" />
it('Akademia testing aplikacie', () => {
    cy.visit('/tema/vojna-na-ukrajine')
    cy.get('.header-payment-button-wrapper')
    cy.wait(6000)
    cy.get('.footer')
    cy.get('[title="Podporiť redakciu"]')
    cy.get('#push-notification-disable').click()
    cy.get('div#ham-menu').click()
    cy.get('span.search-icon').first().click()
    cy.get('input#search_text').click()
    .type('Ukrajina{enter}')

    });