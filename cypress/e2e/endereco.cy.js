/// <reference types="cypress" />

import EnderecoPage from '../support/page-objects/endereco.page';
// const dadosEndereco = require('../fixtures/endereco.json')



describe('Funcionalidade endereços', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       
       cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha, {log: false})//criptografa senha
        cy.get('.woocommerce-form > .button').click()

        

       })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento()
        
        cy.get('.woocommerce-message').should('contain', 'sucesso')
    });

    // it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados em massa', () => {
    //     EnderecoPage.editarEnderecoFaturamento(
    //         dadosEndereco[1].nome,
    //         dadosEndereco[1].sobrenome,
    //         dadosEndereco[1].empresa,
    //         dadosEndereco[1].pais,
    //         dadosEndereco[1].endereco,
    //         dadosEndereco[1].numero,
    //         dadosEndereco[1].cidade,
    //         dadosEndereco[1].estado,
    //         dadosEndereco[1].cep,
    //         dadosEndereco[1].telefone,
    //         dadosEndereco[1].email
    //         )
        
    //     cy.get('.woocommerce-message').should('contain', 'sucesso')
    // });
});