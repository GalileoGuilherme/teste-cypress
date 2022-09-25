/// <reference types="cypress" />
// import { login } from "";
import enderecoPage from '../support/page-objects/endereco.page';
const perfil = require('../fixtures/perfil.json')


describe('Funcionalidade endereços', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       // cy.login('aluno_ebac@treste.com', 'teste@teste.com')
       cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha, {log: false})//criptografa senha
        cy.get('.woocommerce-form > .button').click()

       })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento()
        
    });
});