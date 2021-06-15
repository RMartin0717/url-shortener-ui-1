describe('App', () => {
  beforeEach(() => {
    cy.fixture('urls').then((urls) => {
      cy.intercept('http://localhost:3001/api/v1/urls', { body: urls }).as('urls')
    })
    cy.visit('http://localhost:3000/')
  })
  it('Should display the page title and the existing shortened URLs when a user visits the page', () => {

  })
})
