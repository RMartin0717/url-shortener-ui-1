describe('App', () => {
  beforeEach(() => {
    cy.fixture('urls').then((urls) => {
      cy.intercept('http://localhost:3001/api/v1/urls', { body: urls }).as('urls')
    })
    cy.visit('http://localhost:3000/')
  })
  it('Should display the page title when a user visits the page', () => {
    cy.get('h1').should('have.text', 'URL Shortener')
  })
  it('Should display the existing shortened URLs when a user visits the page', () => {
    cy.get('h3').should('have.text', 'Awesome photo')
      .get('a').should('have.text', 'http://localhost:3001/useshorturl/1')
      .get('p').should('have.text', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })
})
