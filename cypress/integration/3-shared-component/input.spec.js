import Input from '../../../src/components/shared/Input';

describe('Input shared component', () => {
  it('Can fill the Div', () => {
    mount(<Input />);
    cy.get('input[name="email"]')
      .type('molly@dev.dev')
      .should('have.value', 'molly@dev.dev');
  });
});
