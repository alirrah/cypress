describe('example', () => {
  it('google search', () => {
    cy.visit("https://www.google.com/")
    cy.get("textarea#APjFqb").type("Cypress{enter}")
  })

  it('cypress visit', () => {
    cy.visit("https://www.cypress.io/")
    cy.title().should('eq', 'JavaScript Component Testing and E2E Testing Framework | Cypress')
    cy.title().should('include', 'JavaScript')
  })
})