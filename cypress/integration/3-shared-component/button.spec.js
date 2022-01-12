import Button from '../../../src/components/shared/Button';

describe('Button', () => {
  it('Button on button click', () => {
    const callback = cy.stub();
    mount(<Button onClick={callback} />);

    cy.contains('button', /call/i)
      .click()
      .then(() => {
        expect(callback).to.have.been.calledOnce;
        expect(callback).to.have.been.calledWithExactly();
      });
  });
});
