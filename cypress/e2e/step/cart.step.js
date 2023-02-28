import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import cart from '../page/cart.page'
import testdata from '../../../cypress.env.example.json';


Given ("I login", () => {
    cy.cmd_acessarAmbienteTeste();
    cy.cmd_informarUsuarioSenha(testdata.user, testdata.password);
    cy.cmd_validarLoginSucesso();
})

When ("I validate that the items have been add to the cart", () => {
    cart.acessarTelaCarrinho();
})

Then ("remove items from cart", () => {
    cart.removerItensCarrinho()
})

Then ("validated that the products were successfully removed from the cart", () => {
    cart.validarNaoContemItensCarrinho()
})