// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('cmd_acessarAmbienteTeste', () => {
    cy.visit("/")
    cy.viewport(1280, 720);
    cy.clearCookie('saucedemo.com');
    cy.clearCookie('www.saucedemo.com');
    cy.screenshot('tela de login');
  }
)

Cypress.Commands.add('cmd_informarUsuarioSenha', (user, password) => {
    cy.get('[data-test="username"]').type(Cypress.env(`user`))
    cy.get('[data-test="password"]').type(Cypress.env(`password`))
    cy.screenshot('usuario e senha preenchido');
    cy.get('[data-test="login-button"]').click();
  }
)

Cypress.Commands.add('cmd_validarLoginSucesso', () => {
    cy.get(".header_secondary_container").should("contain.text", "Products");
    cy.screenshot('login com sucesso');
  }
)