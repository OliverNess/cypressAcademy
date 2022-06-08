it('hover demo', () =>{
    cy.visit('http://automationpractice.com/index.php')
    cy.get('#homefeatured').children().eq(4).hover()
})

it('invoke show hidden element', () =>{
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.submenu-container').eq(0)
    .should('be.hidden')
    .invoke({log: false}, 'show')
    .should('be.visible')
    .find('a[title="Summer Dresses"]')
    .click()
})

it.only('invoke attribute', ()=> {
    cy.visit('http://automationpractice.com/index.php?id_product=1&controller=product')
    cy.get('#color_to_pick_list').children().eq(0)
    .invoke ({log: false},'attr', 'class')
    .should('include', 'selected')
    cy.get('#quantity_wanted')
    .invoke('attr', 'value')
    .should('equal', '1')
    cy.get('#quantity_wanted')
    .should('have.attr', 'value', '1')

})

it('invoke text', () =>{
    cy.visit('http://automationpractice.com/index.php?id_product=2&controller=product')
    cy.get('#quantity_wanted')
    .clear()
    .type(6 + '{enter}')
    cy.get('.shopping_cart')
    .find('.ajax_cart_quantity')
    .invoke('text').should('equal', '6')
    })