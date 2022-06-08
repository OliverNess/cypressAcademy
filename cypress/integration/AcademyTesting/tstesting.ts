import {testClass} from '../../page object/testPageObject'
const startclass = new testClass

it('Testing Tyscript', () => {
    cy.visit('sfas')
    cy.openPage('asfsa')
    startclass.start().end('Meno')
})