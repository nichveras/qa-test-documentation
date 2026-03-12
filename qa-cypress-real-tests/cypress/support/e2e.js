// Comandos e configurações globais para os testes.

Cypress.Commands.add('loginSauceDemo', (username = Cypress.env('SAUCE_USER'), password = Cypress.env('SAUCE_PASS')) => {
  cy.visit('/')
  cy.get('#user-name').should('be.visible').type(username)
  cy.get('#password').should('be.visible').type(password, { log: false })
  cy.get('#login-button').click()
  cy.url().should('include', '/inventory')
})
