export class testClass {

    start(){

        cy.visit("demoblaze.com")

//Ak chceme retazit prikazy treba pridat return this
return this
    }



    end(menoElementu: string){



        cy.contains(menoElementu)

    }

}