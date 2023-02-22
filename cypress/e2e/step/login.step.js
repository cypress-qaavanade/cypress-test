import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import testdata from '../../../cypress.env.example.json';

Given ("acesso o ambiente de teste", () => {
    cy.cmd_acessarAmbienteTeste();
})
When ("informo user and password", () => {
    cy.cmd_informarUsuarioSenha(testdata.user, testdata.password);
})
Then ("sou conectado no ambiente", () => {
    cy.cmd_validarLoginSucesso();
})

