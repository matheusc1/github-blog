declare namespace Cypress {
  interface Chainable {
    getIssues(): Chainable<void>
  }
}