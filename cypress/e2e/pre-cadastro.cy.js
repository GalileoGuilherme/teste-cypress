/// <reference types="cypress" />
let faker = require('faker');

context('Funcionalidade Pré Cadastro', () => {
    
       beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       });
       
       it('Deve completar o pre cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click

        cy.get('#account_first_name').type('Galileo')
        cy.get('#account_last_name').type('Silva')
        cy.get('#account_display_name')
        cy.get('#account_email')
        cy.get('.woocommerce-Button').click()


       });
           
});