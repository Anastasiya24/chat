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

  it.skip('check new message', () => {
    const message = 'Hello Dear';
    cy.get('textarea[placeholder="Your message"]')
      .type(message)
      .then(() => {
        cy.get('[data-test=send_button]').click();
      });

    // when messages was saved
    // cy.get('[data-test="message_text"]').last().should('include', message);
    cy.get('[data-test=messages_list]').within(() => {
      cy.get('[data-test=message_text]').should('contain', message);
    });
  });

  // FIX IT
  it.skip('check user name is correct', () => {
    cy.get('[data-test=open_edit-modal_button]').click();
    cy.get('[data-test=user-nickname]').should((el) => {
      const text = el.text();
      console.log('text: ', text);
      cy.get('[data-test=sender_name]').should('contain', text);
    });
  });

  it.skip('Edit user name', () => {
    cy.get('[data-test=open_edit-modal_button]').click();
    const newName = 'Test name';
    cy.get('input[placeholder="Nickname"]').type(newName);
    // FIX search the element
    cy.get('[data-test=change_user-name_button]').click();
    cy.get('[data-test=sender_name]').should('contain', newName);
  });
});
