import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import cart from '../page/cart.page'
import testdata from '../../../cypress.env.example.json';


Given ("realizo login no sistema", () => {
    cy.cmd_acessarAmbienteTeste();
    cy.cmd_informarUsuarioSenha(testdata.user, testdata.password);
    cy.cmd_validarLoginSucesso();
})

When ("acesso a tela de carrinho", () => {
    cart.acessarTelaCarrinho();
})

Then ("removo os itens do carrinho", () => {
    cart.removerItensCarrinho()
})

Then ("valido que os produtos foram removidos com sucesso do carrinho", () => {
    cart.validarNaoContemItensCarrinho()
})