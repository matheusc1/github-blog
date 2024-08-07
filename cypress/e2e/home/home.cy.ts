/// <reference types="cypress" />

describe('Home page tests', () => {
  it('should show error when searching for non-existent repository using Enter', () => {
    cy.visit('/')
    cy.get('input[name="repositorySearch"]').type('invalid/repo{enter}')
    cy.contains('Erro ao buscar issues no repositório').should('be.visible')
  })

  it('should show error when searching for non-existent repository using submit button', () => {
    cy.visit('/')
    cy.get('input[name="repositorySearch"]').type('invalid/repo')
    cy.get('button').click()
    cy.contains('Erro ao buscar issues no repositório').should('be.visible')
  })

  it('should open a new tab to view GitHub profile', () => {
    cy.visit('/')
    cy.wait(1000)

    cy.get('a').contains('Github')
      .should('be.visible')
      .and('have.attr', 'target', '_blank')
      .invoke('attr', 'href')
      .should('include', 'github')
  })

  it('should display issues when searching for an existing repository', () => {
    cy.visit('/')
    cy.get('input[name="repositorySearch"]').type('matheusc1/github-blog')
    cy.get('button').click()

    cy.get('a[href^="/post/"]').should('have.length.gte', 0)
  })

  it('should open the issue post in a new page when clicked', () => {
    cy.visit('/')
    cy.get('input[name="repositorySearch"]').type('matheusc1/github-blog')
    cy.get('button').click()

    cy.get('a[href="/post/1"]').click()
    cy.url().should('contain', '/post/1')
  })
})