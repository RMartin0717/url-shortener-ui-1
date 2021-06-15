describe('Form', () => {
  beforeEach(() => {
    cy.fixture('urls').then((urls) => {
      cy.intercept('http://localhost:3001/api/v1/urls', { body: urls }).as('urls')
    })
    cy.visit('http://localhost:3000/')
  })
  it('Should display the Form with the proper inputs when a user visits the page', () => {
    cy.get('form input[name="title"]').should('exist')
      .get('form input[name="urlToShorten"]').should('exist')
  })
  it('Should reflect the information in the title input field when a user fills out the form', () => {
    cy.get('form input[name="title"]').type('Test4')
      .get('form input[name="title"]').should('have.value', 'Test4')
  })
  it('Should reflect the information in the urlToShorten input field when a user fills out the form', () => {
    cy.get('form input[name="urlToShorten"]').type('https://somekindoflongurl.com/abcdefg')
      .get('form input[name="urlToShorten"]').should('have.value', 'https://somekindoflongurl.com/abcdefg')
  })
  it('Should render the new shortened URL when a user fills out and submits the form', () => {
    const uniqueUrl = Date.now()
    cy.get('form input[name="title"]').type(`Test${uniqueUrl}`)
      .get('form input[name="urlToShorten"]').type(`https://somekindoflongurl.com/abcdefg${uniqueUrl}`)
      // .intercept('POST', 'http://localhost:3001/api/v1/urls', {
      //   statusCode: 200
      // })
      .get('button').click()
      .get('h3').should('have.text', `Test${uniqueUrl}`)
  })
})
