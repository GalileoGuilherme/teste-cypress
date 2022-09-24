/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR';
// var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {
    
       beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       });
       
       it('Deve completar o pre cadastro com sucesso', () => {
              cy.get('#reg_email').type(faker.internet.email())
              cy.get('#reg_password').type(faker.internet.password())
              // cy.get(':nth-child(4) > .button').click
              
              cy.get(':nth-child(4) > .button').type('Cypress.io{enter}')

              cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click

              cy.get('#account_first_name').type(faker.name.firstName())
              cy.get('#account_last_name').type(faker.name.lastName())
              cy.get('#account_display_name')
              cy.get('#account_email')
              cy.get('.woocommerce-Button').click()


       });
           
});