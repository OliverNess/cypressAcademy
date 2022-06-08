/// <reference types="cypress" />
const serverId = 'tcz5whb1'; // Replace SERVER_ID with an actual Mailosaur Server ID
const testEmail = `test666@${serverId}.mailosaur.net`
require('cypress-mailosaur');
describe('Registration for ultimateQa with MailoSaur e-mail', () =>{

it('registration', ()=> {
    cy.visit('https://courses.ultimateqa.com/users/sign_up')
    cy.findByPlaceholderText('First Name').type('Kajetán')
    cy.findByPlaceholderText('Last Name').type('Megoldáš')
    cy.findByPlaceholderText('Email').type(testEmail)
    cy.findByPlaceholderText('New Password').type('Kocurik123')
    cy.findAllByText(/^I have read and agree to the/).click()
    cy.findByDisplayValue('Sign up').click()
})

it('Should find my email', () => {
    cy.mailosaurGetMessage(serverId, { sentTo: testEmail }).then(result => {
      expect(result.subject).to.equal('Your Ultimate QA course details.')
    })
  })


})

