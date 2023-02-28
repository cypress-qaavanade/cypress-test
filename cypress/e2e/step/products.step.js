import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import cart from '../page/products.page'
import testdata from '../../../cypress.env.example.json';


Given ("I login ", () => {
    cy.cmd_acessarAmbienteTeste();
    cy.cmd_informarUsuarioSenha(testdata.user, testdata.password);
})

When ("access to product screen", () => {
    cy.cmd_validarLoginSucesso();
})

Then ("Add items to cart", () => {
    cart.adicionarProdutos();
})

Then ("cart screen access ", () => {
    cart.acessarTelaCarrinho();
})

Then ("I validate that the items have been added to the cart", () => {
    cart.validarContemItensCarrinho();
})

Given ("logging in", () => {
    cy.cmd_acessarAmbienteTeste();
    cy.cmd_informarUsuarioSenha(testdata.user, testdata.password);
})

When ("access to products screen", () => {
    cy.cmd_validarLoginSucesso();
})

Then ("cart screen access", () => {
    cart.acessarTelaCarrinho();
})


Then(/^validate the title "([^"]*)" on the screen$/, (titulo) => {
	cart.validarTitulo(titulo);
});

