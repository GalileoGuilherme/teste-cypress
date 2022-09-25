/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => { //print de cada tela do teste
        // cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('a > .hidden-xs').should('contain', 'Welcome')
    })

    it('Deve fazer login com sucesso - usando arquivo de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('a > .hidden-xs').should('contain', 'Welcome')
    })

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})//criptografa senha
            cy.get('.woocommerce-form > .button').click()

            cy.get('a > .hidden-xs').should('contain', 'Welcome')
        })
    })

    it('Deve exibir um mensagem de erro ao inserir usuário inválido', () => {

        cy.get('#username').type('luno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'desconhecido')
    });

    it('Deve exibir um mensagem de erro ao inserir senha inválida', () => {

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('este@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'incorreta')
    });
});