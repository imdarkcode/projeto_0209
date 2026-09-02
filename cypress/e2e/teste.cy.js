describe('Login no SauceDemo', () => {
    it('Deve realizar o login e apresentar os produtos', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-email').type('fake@email.com')
        cy.get('.action-email').should('have.value', 'fake@email.com')
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check()
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').should('be.checked')
    })
})