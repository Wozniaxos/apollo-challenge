describe('Redirect to countries from home', () => {
    it('successfully loads & redirects to countries list after click', () => {
      cy.visit('/')
      cy.get('[data-testid=countriesLink]').click()
      cy.url().should('include','/countries')
    })
  })