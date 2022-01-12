describe('Div test', () => {
  it('Can fill the Div', () => {
    cy.visit('/');
    cy.get('div');
  });
});
