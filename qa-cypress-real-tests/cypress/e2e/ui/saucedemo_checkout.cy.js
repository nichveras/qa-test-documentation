describe('SauceDemo - Fluxo de compra (E2E)', () => {
  it('deve logar, adicionar produto ao carrinho e finalizar checkout', () => {
    cy.loginSauceDemo()

    // Adiciona um item
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_badge').should('contain', '1')

    // Carrinho
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart')
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')

    // Checkout
    cy.get('#checkout').click()
    cy.url().should('include', '/checkout-step-one')

    cy.get('#first-name').type('Nicholas')
    cy.get('#last-name').type('Veras')
    cy.get('#postal-code').type('01000-000')
    cy.get('#continue').click()

    cy.url().should('include', '/checkout-step-two')
    cy.get('.summary_total_label').should('contain', 'Total')

    cy.get('#finish').click()

    cy.url().should('include', '/checkout-complete')
    cy.get('.complete-header').should('contain', 'Thank you for your order!')
  })
})
