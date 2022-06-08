///<reference types="cypress-iframe" />
describe('Testing iFrames with plugin',() =>{
    const random = Math.floor(Math.random() * 7)
    beforeEach(() =>{
        cy.visit('https://www.martinus.sk/')
    })

    it('TC1', ()=>{
        //cy.frameLoaded()
        //cy.frameLoaded({url: 'https://www.martinus.sk/'})
        cy.iframe('[src="https://consentcdn.cookiebot.com/sdk/bc-v4.min.html"]').find('#CybotCookiebotDialogBodyButtonDecline')
        //cy.frameLoaded({ url: 'https://metabet.static.api.areyouwatchingthis.com/api/sideodds.json?apiKey=219f64094f67ed781035f5f7a08840fc&q=' })
        

    })

})