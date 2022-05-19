describe('Not Found Page', () => {
  it('Check that Not Found page appear when route is wrong', () => {
    const wrongRoute = '/wrong_path';
    cy.visit(wrongRoute);
    cy.get('h1').should('have.text', 'Page not found');
  });
});
