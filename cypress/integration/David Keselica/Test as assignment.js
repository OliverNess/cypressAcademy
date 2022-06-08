
describe ('Test set for Academy', () => {
    it('Akademia_part_1' , () =>{
    //testing of connect to website
    cy.visit('http://automationpractice.com/index.php')
    // testing of visible logo
    cy.get('a[href="http://automationpractice.com/"]')
    .should('be.visible')
    // checking of openning and searching in bar
    cy.get('#search_query_top')
    .should('be.visible')
    // type abcde and ENTER
    cy.get('#search_query_top').type('abcde{enter}')
    // existing message " No result were found for your search "abcde"
    cy.contains("No results were found for your search")
    .should('be.visible')
    //click on logo and back to home page
    cy.get('a[href="http://automationpractice.com/"]')
    .eq(0).click();
    //verification, that we have WOMEN and DRESSES on HOME PAGE
    cy.get('.sf-with-ul')
    .should('be.visible')
    })

    it('Akademia_part_2' , () =>{
        //testing of connect to website
        cy.visit('http://automationpractice.com/index.php')
        // test button SIGN IN
        cy.get('.login').click();
        // testing of credentials
        cy.get('#email').type('david.keselica@gmail.com')
        cy.get('#passwd').type('kocurik')
        // submitting login
        cy.get('#SubmitLogin').click();
        // verifying of that login was successful (Order history and details & My Wishlists)
        cy.get('a[href="http://automationpractice.com/index.php?controller=history"]')
        .should('be.visible')
        cy.get('.icon-heart')
        .should('be.visible')
        // Click on button Cart
        cy.contains('Cart').click();
        // Veryfing, that Payment method is there
        cy.contains('Payment')
        .should('be.visible')
        // Sign Out from account and make sure, that Sign Out Button disappeared
        cy.get('.logout').click();
        cy.get('.logout').should('not.exist')

    })

    it('Akademia_part_3' , () =>{
        //testing of connect to website
        cy.visit('http://automationpractice.com/index.php')
        // adding a product to shopping cart
        cy.get('#search_query_top').type('Faded Short Sleeve T-shirts{enter}')
        // proceed to check out 
        cy.contains('Add to cart').click();
        // shopping cart summary
        cy.contains('Proceed to checkout')
        .click();
    })
    it('Akademia_part_4' , () =>{
        //testing of connect to website
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Terms and conditions of use').click();
        cy.get ('.page-subheading')
        .eq(0,1,2)
        .should('be.visible')

    })

})