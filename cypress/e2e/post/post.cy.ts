/// <reference types="cypress" />

describe('Issue post page tests', () => {
  it('should return to home page', () => {
    cy.getIssues()

    cy.get('a[href="/"]').click()
    cy.url().should('eq', 'http://localhost:5173/')
  })

  it('should have a Github link with the correct URL and target attribute', () => {
    cy.getIssues()

    cy.get('a').contains('Github')
      .should('include', 'matheusc1/github-blog/issues/1')
      .and('have.attr', 'target', '_blank')
  })
})