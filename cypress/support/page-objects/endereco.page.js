class EnderecoPage {

    editarEnderecoFaturamento() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name_field > label').type('Galileo')
        cy.get('#billing_last_name_field > label').type('Guilherme')
        cy.get('#billing_company').clear().type('Ebac')

        cy.get('#select2-billing_country-container').click().type('Brasil{enter}')
        cy.get('#billing_address_1').clear().type('Dos Mochileiros')
        cy.get('#billing_address_2').clear().type('114')
        cy.get('#billing_city').clear().type('Recife')
        cy.get('#select2-billing_state-container').click().type('Pernambuco{enter}')
        cy.get('#billing_postcode').clear().type('54759555')
        cy.get('#billing_phone').clear().type('81991432222')
        cy.get('#billing_email').clear().type('email@email.com')
        cy.get(':nth-child(2) > .button').click()

        


        
    }

    editarEnderecoEntrega() {


    }

}

export default new EnderecoPage()