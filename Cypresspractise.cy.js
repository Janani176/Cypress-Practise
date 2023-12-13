describe('template spec', () => {
  it('passes', () => {
    cy.visit('www.google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gb_Cd').click()
  })
})