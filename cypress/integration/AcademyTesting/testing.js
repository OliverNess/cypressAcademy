
it('http requests', () => {
    cy.visit('https://demoblaze.com/')
    cy.intercept('https://api.demoblaze.com/entries').as('Entries')
    cy.intercept('POST', 'https://api.demoblaze.com/view').as('Samsung s6 post')
    cy.wait('@Entries').its('response.statusCode')
    .should('eq', 200)
    cy.get('@Entries').then(code => {
        expect(code.response.statusCode).to.eq(200)
    })


    cy
    .intercept({
      method: 'GET',
      url: 'https://api.demoblaze.com/entries',
      //response: [],
      //statusCode: 500  
    })
    .as('test page')

    cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/entries',
        body: {
            name: 'board vytvoreny cez api'
        }
    })
})