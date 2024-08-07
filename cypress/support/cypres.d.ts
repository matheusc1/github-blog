// cypress/support/cypress.d.ts
declare namespace Cypress {
  interface Chainable<Subject = any> {
    getIssues(): Chainable<void>
  }
}