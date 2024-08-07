/// <reference types="cypress" />

describe('Home page tests', () => {
  it('search for non-existent repository by pressing Enter', () => {
    cy.visit('/')
    cy.get('input[name="repositorySearch"]').type('invalid/repo{enter}')
    cy.contains('Erro ao buscar issues no repositório').should('be.visible')
  })

  it('search for a non-existent repository by clicking submit button', () => {
    cy.visit('/')
    cy.get('input[name="repositorySearch"]').type('invalid/repo')
    cy.get('button').click()
    cy.contains('Erro ao buscar issues no repositório').should('be.visible')
  })

  it('open a new tab to see github profile', () => {
    cy.visit('/')
    cy.wait(1000)

    cy.get('a').contains('Github')
      .should('be.visible')
      .and('have.attr', 'target', '_blank')
      .invoke('attr', 'href')
      .should('include', 'github')
  })

  it('search for issues in a repository', () => {
    cy.visit('/')
    cy.get('input[name="repositorySearch"]').type('matheusc1/github-blog')
    cy.get('button').click()

    cy.get('a[href^="/post/"]').should('have.length.gte', 0)
  })

  it('open the issue post in a new page', () => {
    cy.visit('/')
    cy.get('input[name="repositorySearch"]').type('matheusc1/github-blog')
    cy.get('button').click()

    cy.get('a[href="/post/1"]').click()
    cy.url().should('contain', '/post/1')
  })
})