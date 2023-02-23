import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import cart from '../page/products.page'
import testdata from '../../../cypress.env.example.json';


Given ("realizo login", () => {
    cy.cmd_acessarAmbienteTeste();
    cy.cmd_informarUsuarioSenha(testdata.user, testdata.password);
})

When ("acesso a tela de produtos", () => {
    cy.cmd_validarLoginSucesso();
})

Then ("Adiciono os itens no carrinho", () => {
    cart.adicionarProdutos();
})

Then ("acesso a tela de carrinho ", () => {
    cart.acessarTelaCarrinho();
})

Then ("valido que os itens foram adicionados no carrinho", () => {
    cart.validarContemItensCarrinho();
})

Given ("realizando o login", () => {
    cy.cmd_acessarAmbienteTeste();
    cy.cmd_informarUsuarioSenha(testdata.user, testdata.password);
})

When ("acesso a tela produtos", () => {
    cy.cmd_validarLoginSucesso();
})

Then ("adiciono menos itens no carrinho", () => {
    cart.acessarTelaCarrinho();
})


Then(/^valido o título "([^"]*)" na tela$/, (titulo) => {
	cart.validarTitulo(titulo);
});

