describe('Form', () => {
  beforeEach(() => {
    cy.fixture('urls').then((urls) => {
      cy.intercept('http://localhost:3001/api/v1/urls', { body: urls }).as('urls')
    })
    cy.visit('http://localhost:3000/')
  })
  it('Should display the Form with the proper inputs when a user visits the page', () => {

  })
  it('Should reflect the information in the input fields when a user fills out the form', () => {

  })
  it('Should render the new shortened URL when a user fills out and submits the form', () => {

  })
})
