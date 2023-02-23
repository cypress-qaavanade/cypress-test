class products {

  adicionarProdutos() {
    cy.get('[data-test^="add-to-cart-"]').each($btn => {
      cy.wrap($btn).click();
    });
    cy.screenshot();
  }

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

  acessarTelaCarrinho() {
    cy.get('.shopping_cart_link')
      .click();
  }

  validarTitulo(titulo){
    cy.get('.title')
    .should('have.text',titulo );
  }
}

export default new products();
