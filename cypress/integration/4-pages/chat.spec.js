describe('Chat page', () => {
  beforeEach(() => {
    const userId = '613f6996ad9b693932a6fc82';
    localStorage.setItem('id', userId);
    cy.visit('/');
  });

  it('check the correct path', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/');
    });
  });

  it('message textarea changes correctly', () => {
    const message = 'Hello Molly';
    cy.get('textarea[placeholder="Your message"]')
      .type(message)
      .should('have.value', message);
  });

  it('check new message', () => {
    const message = 'Hello Dear';
    cy.get('textarea[placeholder="Your message"]')
      .type(message)
      .then(() => {
        cy.get('[data-test=send_button]').click();
      });

    // when messages was saved
    // cy.get('[data-test="message_text"]').last().should('include', message);
    cy.get('[data-test="messages_list"]').within(() => {
      cy.get('[data-test=message_text]').should('contain', message);
    });
  });
});
