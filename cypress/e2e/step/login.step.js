import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import testdata from '../../../cypress.env.example.json';

Given ("access the test environment", () => {
    cy.cmd_acessarAmbienteTeste();
})
When ("inform user and password", () => {
    cy.cmd_informarUsuarioSenha(testdata.user, testdata.password);
})
Then ("I'm connected in the environment", () => {
    cy.cmd_validarLoginSucesso();
})

