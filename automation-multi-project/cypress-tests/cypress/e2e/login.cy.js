describe('Login Test', () => {
  it('should display error on invalid login', () => {
    cy.visit('/index.php?controller=authentication');
    cy.get('#email').type('fake@example.com');
    cy.get('#passwd').type('invalidpass');
    cy.get('#SubmitLogin').click();
    cy.contains('Authentication failed').should('be.visible');
  });
});