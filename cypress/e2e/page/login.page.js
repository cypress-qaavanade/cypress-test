class login {
  url() {
    cy.visit(Cypress.env(this));
  }
  user() {
    cy.get("#user-name").type(Cypress.env("standard_user"));
  }
  password() {
    cy.get("#password").type(Cypress.env("secret_sauce"));
  }
  btnEnter() {
    cy.get("#login-button").click();
  }
  validacaoProducts() {
    cy.get(".header_secondary_container").should("contain.text", "Products");
  }
}

export default new login();
