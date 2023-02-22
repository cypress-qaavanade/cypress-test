class cart {

  acessarTelaCarrinho() {
    cy.get('.shopping_cart_link')
      .click()
      .get('.title')
      .contains('Your Cart').should('be.visible');
  }

  validarContemItensCarrinho() {
    cy.get('.cart_item').should('exist')
    cy.screenshot();
  }

  removerItensCarrinho() {
    cy.get('[data-test^="remove-"]').each($btn => {
      cy.wrap($btn).click();
    });
  }

  validarNaoContemItensCarrinho() {
    cy.get('.cart_item').should('not.exist')
    cy.screenshot();
  }
}

export default new cart();
