describe('Greeting page', () => {
  it('Html test', () => {
    cy.visit('/greeting');
    cy.get('h1').should('have.text', 'Nice to meet you');
    cy.get('p').first().should('have.text', 'What is your name?');

    const name = 'Molly';
    cy.get('input[placeholder="Nickname"]').type(name).should('have.value', name);

    cy.get('form > div:nth-child(even)')
      .click()
      .then(() => {
        cy.get('header').should('be.visible');
        // expect(location.pathname).to.equal('/');
      });
  });
});
