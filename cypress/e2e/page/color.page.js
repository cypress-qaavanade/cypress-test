class color {
 acessandoambiente() {
  cy.cmd_acessarAmbienteTeste()
  cy.cmd_informarUsuarioSenha()
 }
nomebtn() {
 cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('have.text', 'Add to cart')
}
color() {
 cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('have.css', 'color','rgb(226, 35, 26)')
 }
}
export default new color()