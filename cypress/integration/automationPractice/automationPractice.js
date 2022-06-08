describe('Test set for automationpractice.com',() =>{
    const random = Math.floor(Math.random() * 7)
    beforeEach(() =>{
        cy.visit('http://automationpractice.com/index.php')
    })
    
    it('TC1',() => {
        cy.get('.logo')
        .should('be.visible')
        cy.get('#search_query_top')
        .should('be.visible')
        .should('not.be.disabled')
        .type('???????????????????{enter}')
        cy.get('.alert-warning')
        .should('contain', 'No results were found for your search')
        cy.get('.logo')
        .click()
        cy.url().should('eq', 'http://automationpractice.com/index.php')
    })

    it('TC2', () =>{
        cy.get('.login')
        .click()
        cy.get('#email')
        .type(Cypress.env('username'))
        cy.get('#passwd')
        .type(Cypress.env('password') + '{enter}')
        cy.get('[title="My wishlists"]')
        .should('be.visible')
        cy.get('[title="Credit slips"]')
        .should('be.visible')
        cy.get('[title="Information"]')
        .should('be.visible')
        cy.get('.shopping_cart')
        .children()
        .first()
        .click({force: true})
        cy.get('#center_column')
        .should('contain', 'Payment')
        cy.get('.logout')
        .click()
        .then(logout => {
            expect(logout).to.not.exist
        })
    })
    
    it('TC 3', () =>{
        //na domovskej stránke kliknúť na tlačidlo 'BEST SELLERS'.
        cy.get('#home-page-tabs')
        .children()
        .eq(1)
        .click()
        //overiť či sa nachádzame v danej sekcii, prejsť kurzorom myši na náhodne zvolený produkt
        // a kliknúť na tlačidlo 'Add to cart'.
        .should('have.class', 'active')
        cy.get('#blockbestsellers').children().eq(random).trigger('mouseover').within(()=>{
               cy.get('a[href^="http://automationpractice.com/index.php?controller=cart&add="]')
                .click() 
                .wait(8000)
        })
        //overiť, či bol produkt vložený do košíka
        cy.get('#layer_cart')
        .should('contain', 'Product successfully added to your shopping cart')
        //zatvoriť okno s oznámením o úspešnom pridaní produktu do košíka
        cy.get('.cross')
        .click()
        //overiť, že v pravej hornej časti sa vedľa košíka zobrazuje správny počet produktov, t. j. 1
        cy.get('a[href="http://automationpractice.com/index.php?controller=order"]').within(()=>{
            cy.get('span')
            .eq(0)
            .should('contain', '1')
        })
    })

    it('TC4',()=>{
        //Na domovskej stránke overiť, že sa nachádzame v sekcii 'POPULAR'
        cy.get('#home-page-tabs')
        .children()
        .eq(0)
        .should('have.class', 'active')
        //Prejsť kurzorom myši na náhodne zvolený produkt a kliknúť na tlačidlo 'More'
        cy.get('#homefeatured').children().eq(random).trigger('mouseover').within(()=>{
            cy.get('.lnk_view')
            .click() 
        })
        //Zvoliť inú farbu vybraného produktu
        cy.get('#color_to_pick_list').children().then(zoznam =>{
            if(zoznam.length > 1){
                cy.get(zoznam).not('.selected').eq(Math.floor(Math.random() * (zoznam.length - 2)))
                .click()
                .should('have.class', 'selected')
            }
            })
        //zvoliť ľubovoľnú veľkosť oblečenia
        cy.get('#group_1')
        .select(Math.floor(Math.random() * 2))
        //do poľa 'Quantity' vpísať ľubovoľné číslo
        cy.get('#quantity_wanted')
        .clear()
        .type(Math.floor(Math.random() * 10) + 1 + '{enter}')
        //počkať na zobrazenie okna oznamujúceho pridanie do košíka a kliknúť na 'Proceed to checkout'    
        cy.get('[title="Proceed to checkout"]')
        .wait(8000)
        .click()
        //znížiť počet produktov v košíku o 1
        cy.get('[id^="cart_quantity_down"]')
        .click()
        })
    })