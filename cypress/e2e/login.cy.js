/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => { //print de cada tela do teste
       // cy.screenshot()
    });

    it('Deve fazer login com sucesso' , () =>{
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('a > .hidden-xs').should('contain', 'Welcome')
    })

    it('Deve exibir um mensagem de erro ao inserir usuário inválido', () => {
        
        cy.get('#username').type('luno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error > li').should('contain','desconhecido')
    });

    it('Deve exibir um mensagem de erro ao inserir senha inválida', () => {
        
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('este@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'incorreta')
    });
});